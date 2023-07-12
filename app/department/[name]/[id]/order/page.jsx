"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Department = () => {
    const router = useRouter();
    const params = useParams();
    const [ordered, setOrdered] = useState();
    const [showModal, setShowModal] = useState(false);
    const [checkedItems, setCheckedItems] = useState([]);
    const [items, setItems] = useState([]);

    const fetchFoods = async () => {
        const response = await fetch('/api/food');
        const data = await response.json();
        setItems(data);
    };

    useEffect(() => {
        fetchFoods();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!params.id) return alert('Employee ID not found');

        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        for (const checkbox of checkboxes) {
            if (checkbox.checked) {
                checkedItems.push(checkbox.id);
            }
        }

        try {
            const response = await fetch(`/api/employee/${params.id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    order: checkedItems
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const response2 = await fetch(`/api/food`, {
                method: 'PATCH',
                body: JSON.stringify({
                    total: checkedItems,
                    department_name: params.name
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok && response2.ok) {
                router.push(`/department/${params.name}`);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setShowModal(false);
        }
    };

    const getOrderDetails = async () => {
        const response = await fetch(`/api/employee/${params.id}`);
        const data = await response.json();
        // console.log(data[0]);
        setOrdered(data);
    }

    useEffect(() => {
        if (params.id) getOrderDetails();
    }, [params.id]);

    const reload = async (e) => {
        e.preventDefault();
        if (!params.id) return alert('Employee ID not found');

        const hasConfirmed = confirm("Are you sure you want to reload?");
        if (hasConfirmed) {
            try {
                const response = await fetch(`/api/employee/${params.id}/empty`, {
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const response2 = await fetch('/api/food/update', {
                    method: 'PATCH',
                    body: JSON.stringify({
                        department_name: params.name
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (response.ok && response2.ok) {
                    router.push(`/department/${params.name}`);
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    const handleGoBack = () => {
        router.push(`/department/${params.name}`);
    };
    return (
        <>
            <div className='flex-between w-full pt-3'>
                <button onClick={handleGoBack} className='flex gap-2 text-gray-500 flex-center' >
                    <Image
                        src='/assets/back.png'
                        alt='back-logo'
                        width={15}
                        height={15}
                        className='object-contain'
                    />Go Back
                </button>
            </div>
            <div className="w-full flex justify-end mb-5">
                <button className="reload p-2" onClick={reload}>
                    <Image
                        src='/assets/reload.png'
                        alt='reload'
                        width={20}
                        height={20}
                        className='object-contain'
                    />
                </button>
            </div>
            <div className="prompt_card mb-3" onClick={() => setShowModal(!showModal)}>
                <p className="my-3 font-satoshi items-center text-2xl text-extrabold text-gray-700 flex justify-between">New Order
                    <Image
                        src='/assets/plus.png'
                        alt='add-logo'
                        width={24}
                        height={24}
                        className='object-contain'
                    />
                </p>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Order now
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            x
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <form onSubmit={handleSubmit}>
                                        <ul className="text-xl glassmorphism">
                                            {items.map((item) => (
                                                <li key={item._id}>
                                                    <input
                                                        type="checkbox"
                                                        id={item.food_name}
                                                    />
                                                    &nbsp;{item.food_name}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex justify-center mt-2">
                                            <button type="submit" className="bg-emerald-500 w-20 flex justify-center aligns-center text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Order</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            <ul className="text-xl w-full glassmorphism">
                {/* {console.log(ordered)} */}
                {ordered ? (
                    ordered?.map((item, index) => (
                        <li key={index} className="flex align-center reload mt-3 py-2 px-3">
                            - {item}
                        </li>
                    ))) : (
                    ""
                )}
            </ul>
        </>
    )
}

export default Department;
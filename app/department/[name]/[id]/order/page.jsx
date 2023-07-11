"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

const Department = () => {
    const router = useRouter();
    const params = useParams();

    const handleClick = async () => {
        router.push(`/department/${params.name}/${params.id}/order/view_order`);
    };
    const handleClick2 = async () => {
        router.push(`/department/${params.name}/${params.id}/order/new`);
    };

    const reload = async (e) => {
        e.preventDefault();
        if (!params.id) return alert('Employee ID not found');

        try {
            const response = await fetch(`/api/employee/${params.id}/empty`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                router.push(`/department/${params.name}/${params.id}/order`);
            }
        } catch (error) {
            console.log(error);
        }

    }

    const handleGoBack = () => {
        router.back();
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
            <div onClick={handleClick} className="prompt_card mb-3">
                <p className="my-3 font-satoshi items-center text-2xl text-extrabold text-gray-700 flex justify-between">View Previous Order
                </p>
            </div>
            <div onClick={handleClick2} className="prompt_card mb-3">
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
        </>
    )
}

export default Department;
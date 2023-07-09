"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Order = ({ params }) => {
    const [ordered, setOrdered] = useState();
    const router = useRouter();

    const getOrderDetails = async () => {
        const response = await fetch(`/api/employee/${params.id}`);
        const data = await response.json();
        // console.log(data[0]);
        setOrdered(data);
    }

    const handleGoBack = () => {
        router.back();
    };
    
    useEffect(() => {
        if (params.id) getOrderDetails();
    }, [params.id]);

    return (
        <>
            <div className='flex-between w-full mb-16 pt-3'>
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
            <ul className="text-xl w-full glassmorphism">
                {/* {console.log(ordered)} */}
                {ordered && ordered?.map((item, index) => (
                    <li key={index} className="flex align-center reload mt-3 py-2 px-3">
                        - {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Order;
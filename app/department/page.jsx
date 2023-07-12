"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
    const router = useRouter();
    const [department, setDepartment] = useState([]);

    const fetchDepartments = async () => {
        const response = await fetch('/api/department');
        const data = await response.json();
        setDepartment(data);
    };

    useEffect(() => {
        fetchDepartments();
    }, []);

    const handleGoBack = () => {
        router.push('/');
    };

    return (
        <>
            <div className='flex-between w-full mb-5'>
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
            {department && department?.map((department, index) => (
                <div className="prompt_card mb-3 cursor-pointer" key={index} onClick={() => router.push(`/department/${department.department_name}`)}>
                    <p className="my-3 font-satoshi text-2xl text-extrabold text-gray-700">{department.department_name}</p>
                </div>
            ))}
        </>
    )
}

export default page;
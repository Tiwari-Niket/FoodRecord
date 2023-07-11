"use client";

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


    return (
        <>
            {/* <div className="prompt_card mb-3 cursor-pointer" onClick={handleClick}>
                <p className="my-3 font-satoshi text-2xl text-extrabold text-gray-700">Department</p>
            </div> */}
            {department && department?.map((department, index) => (
                <div className="prompt_card mb-3 cursor-pointer" key={index} onClick={() => router.push(`/department/${department.department_name}`)}>
                    <p className="my-3 font-satoshi text-2xl text-extrabold text-gray-700">{department.department_name}</p>
                </div>
            ))}
        </>
    )
}

export default page;
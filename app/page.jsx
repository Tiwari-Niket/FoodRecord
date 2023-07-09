"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/department');
    };
    const handleClick2 = () => {
        router.push('/food');
    };

    const reload = async (e) => {
        e.preventDefault();

        // checkedItems.push(getCheckedCheckboxValues());
        try {
            const response = await fetch(`/api/food/new/`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const response2 = await fetch(`/api/employee/new/`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok && response2.ok) {
                router.push(`/`);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
        {/* <head>
            <link rel="manifest" href="/manifest.json"></link>
        </head> */}
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
            <div className="prompt_card mb-3 cursor-pointer" onClick={handleClick}>
                <p className="my-3 font-satoshi text-2xl text-extrabold text-gray-700">Department</p>
            </div>
            <div className="prompt_card cursor-pointer" onClick={handleClick2}>
                <p className="my-3 font-satoshi text-2xl text-extrabold text-gray-700">Food</p>
            </div>
        </>
    )
}

export default page;
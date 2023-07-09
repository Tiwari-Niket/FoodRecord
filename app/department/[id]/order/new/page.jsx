"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const Order = ({ params }) => {
  const router = useRouter();
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
          total: checkedItems
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok && response2.ok) {
        router.push(`/department/${params.id}/order`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const reload = async (e) => {
    e.preventDefault();
    if (!params.id) return alert('Employee ID not found');

    // checkedItems.push(getCheckedCheckboxValues());
    try {
      const response = await fetch(`/api/employee/${params.id}/empty`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push(`/department/${params.id}/order`);
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        for (const checkbox of checkboxes) {
          if (checkbox.checked) {
            checkbox.checked = false;
          }
        }
        setCheckedItems([]);
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
      <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col gap-7">
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
        <div className="flex justify-center">
          <button type="submit" className="bg-emerald-500 w-20 flex justify-center aligns-center text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Order</button>
        </div>
      </form>
    </>
  );
}

export default Order;
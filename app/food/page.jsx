"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Food = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState({ food_name: '' });
  const [foods, setFoods] = useState([]);

  const Food = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('/api/food/new', {
        method: 'POST',
        body: JSON.stringify({
          food_name: name.food_name,
        })
      });

      if (response.ok) {
        window.location.reload();
      } else if (!response.ok) {
        alert("Food already exist");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setShowModal(false);
      setSubmitting(false);
      setName({ food_name: '' });
    }
  };

  const fetchFoods = async () => {
    const response = await fetch('/api/food');
    const data = await response.json();
    setFoods(data);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const handleDelete = async (food) => {
    const hasConfirmed = confirm("Are you sure you want to delete this food?");
    if (hasConfirmed) {
      try {
        await fetch(`/api/food?id=${food._id}`, {
          method: 'DELETE'
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

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
      <div className="prompt_card mb-3" onClick={() => setShowModal(!showModal)}>
        <p className="my-3 font-satoshi items-center text-2xl text-extrabold text-gray-700 flex justify-between">Add Food
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
                    Add Food
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
                  <section className="w-full max-w-full flex-start flex-col">
                    <form onSubmit={Food} className="w-full max-w-2xl flex flex-col gap-7">
                      <label>
                        <input
                          value={name.food_name}
                          onChange={(e) => setName({ food_name: e.target.value })}
                          placeholder="Enter Food Name"
                          required
                          className="form_input glassmorphism"
                        />
                      </label>
                      <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                        <button type="submit" disabled={submitting} className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Add</button>
                      </div>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {foods && (
        foods.map((food) => (
          <div className="prompt_card mb-3" key={food._id}>
            <p className="font-satoshi items-center text-2xl text-extrabold text-gray-700 flex justify-between">{food.food_name}
              <Image
                src='/assets/delete.png'
                alt='add-logo'
                onClick={async () => {
                  await handleDelete(food);
                  const filteredfoods = foods.filter((p) => p._id !== food._id);
                  setFoods(filteredfoods);
                }}
                width={24}
                height={24}
                className='object-contain'
              />
            </p>
            <div className="total text-center m-2 p-2">Total :
              <p className="total text-center m-2 p-2">dept1_Total : {food.dept1_count}</p>
              <p className="total text-center m-2 p-2">dept2_Total : {food.dept2_count}</p>
              <p className="total text-center m-2 p-2">dept3_Total : {food.dept3_count}</p>
              <p className="total text-center m-2 p-2">dept4_Total : {food.dept4_count}</p>
            </div>
          </div>
        ))
      )}
    </>
  )
}

export default Food;

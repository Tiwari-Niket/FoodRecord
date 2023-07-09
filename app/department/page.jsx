"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Form from "@components/Form";
import { useRouter } from "next/navigation";

const Department = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState({ employee_name: '' });
  const [employees, setEmployees] = useState([]);

  const Department = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('/api/employee/new', {
        method: 'POST',
        body: JSON.stringify({
          employee_name: name.employee_name
        })
      });

      if (response.ok) {
        router.push('/department');
      } else if (!response.ok) {
        alert("Employee already exist");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setShowModal(false);
      setSubmitting(false);
      setName({ employee_name: '' });
    }
  };

  const fetchEmployees = async () => {
    const response = await fetch('/api/employee');
    const data = await response.json();
    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = async (employee) => {
    const hasConfirmed = confirm("Are you sure you want to delete this prompt?");
    if (hasConfirmed) {
      try {
        const response = await fetch(`/api/employee?id=${employee._id}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          router.push('/department');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleClick = async (employee) => {
    router.push(`/department/${employee._id}/order`);
  };

  const handleGoBack = () => {
    router.back();
  };

  const reload = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/employee/new`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push(`/department`);
      }
    } catch (error) {
      console.log(error);
    }
  }

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
        <div className="flex justify-end mb-5">
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
      </div>
      <div className="prompt_card mb-3" onClick={() => setShowModal(!showModal)}>
        <p className="my-3 font-satoshi items-center text-2xl text-extrabold text-gray-700 flex justify-between">Add Employee
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
                    Add Employee
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
                  <Form
                    name={name}
                    setName={setName}
                    submitting={submitting}
                    handleSubmit={Department}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {employees && (
        employees.map((employee) => (
          <div onClick={async () => await handleClick(employee)} className="prompt_card mb-3" key={employee._id}>
            <p className="my-3 font-satoshi items-center text-2xl text-extrabold text-gray-700 flex justify-between">{employee.employee_name}
              <Image
                src='/assets/delete.png'
                alt='add-logo'
                onClick={async () => {
                  await handleDelete(employee);
                  const filteredEmployees = employees.filter((p) => p._id !== employee._id);
                  setEmployees(filteredEmployees);
                }}
                width={24}
                height={24}
                className='object-contain'
              />
            </p>
          </div>
        ))
      )}
    </>
  )
}

export default Department;
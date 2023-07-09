import Link from "next/link";

const Form = ({ name, setName, submitting, handleSubmit }) => {
    return (
        <section className="w-full max-w-full flex-start flex-col">
            <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col gap-7">
                <label>
                    <input
                        value={name.employee_name}
                        onChange={(e) => setName({ employee_name: e.target.value})}
                        placeholder="Enter Employee Name"
                        required
                        className="form_input glassmorphism"
                    />
                </label>
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                    <button type="submit" disabled={submitting} className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Add</button>
                </div>
            </form>
        </section>
    )
}

export default Form;
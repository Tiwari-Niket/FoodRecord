import Empolyee from "@models/employee";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
    const { employee_name, department_name } = await req.json();
    const name = employee_name.replace(" ", "").toLowerCase()

    try {
        await connectToDB();
        const findEmployee = await Empolyee.findOne({ employee_name: employee_name, department_name: department_name });
        
        if (!findEmployee) {
            const newEmployee = new Empolyee({ employee_name: name, department_name: department_name });
            await newEmployee.save();

            return new Response(JSON.stringify(newEmployee), { status: 201 });
        }
        return new Response("Employee Already Exist", { status: 404 });
    } catch (error) {
        return new Response("Failed to add a new employee", { status: 500 });
    }
};

// PATCH (update)
export const PATCH = async (request) => {
    try {
        await connectToDB();
        
        const existingEmployee = await Empolyee.find({});

        if (!existingEmployee) return new Response("Employee not found", { status: 404 });
        
        for (let index = 0; index < existingEmployee?.length; index++) {
                existingEmployee[index].order = [];
                await existingEmployee[index].save();
        }

        // return new Response(JSON.stringify(existingFood), { status: 200 });
        return new Response("Updated", { status: 200 });
    } catch (error) {
        return new Response("Failed to empty an order", { status: 500 });
    }
};
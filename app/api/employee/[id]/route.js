import Empolyee from "@models/employee";
import { connectToDB } from "@utils/database";

// PATCH (update)
export const PATCH = async(request, {params})=>{
    const {order}=await request.json();
    try {
        await connectToDB();
        const existingEmployee = await Empolyee.findById(params.id);
        
        if(!existingEmployee) return new Response("Employee not found", { status: 404 });
        
        existingEmployee.order.push(order);
        await existingEmployee.save();
        
        return new Response((existingEmployee), { status: 200 });
    } catch (error) {
        return new Response("Failed to update a order", { status: 500 });
    }
};

// GET 
export const GET = async (request, {params}) => {
    try {
        await connectToDB();

        const employee = await Empolyee.findById(params.id);

        return new Response(JSON.stringify(employee.order[0]), { status: 200 });

    } catch (error) {

        return new Response("Failed to fetch all employee", { status: 500 });
        
    }
};
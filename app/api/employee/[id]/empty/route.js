import Empolyee from "@models/employee";
import { connectToDB } from "@utils/database";

// PATCH (update)
export const PATCH = async(request, {params})=>{
    try {
        await connectToDB();
        const existingEmployee = await Empolyee.findById(params.id);
        
        if(!existingEmployee) return new Response("Employee not found", { status: 404 });
        existingEmployee.order=[];

        await existingEmployee.save();
        return new Response((existingEmployee), { status: 200 });
    } catch (error) {
        return new Response("Failed to update a order", { status: 500 });
    }
};
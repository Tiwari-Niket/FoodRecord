import Empolyee from "@models/employee";
import { connectToDB } from "@utils/database";

// PATCH (update)
export const PATCH = async (request) => {
    try {
        await connectToDB();
        
        const existingEmployee = await Empolyee.find({department_name: request.url.split('/')[6]});

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
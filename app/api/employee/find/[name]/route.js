import Empolyee from "@models/employee";
import { connectToDB } from "@utils/database";

// GET (read)
export const GET = async (request) => {
    try {
        await connectToDB();
        const employee = await Empolyee.find({department_name: request.url.split('/')[6]});

        return new Response(JSON.stringify(employee), { status: 200 });

    } catch (error) {

        return new Response("Failed to fetch all employee", { status: 500 });
        
    }
};
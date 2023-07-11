import Department from "@models/department";
import { connectToDB } from "@utils/database";

// GET (read)
export const GET = async (request) => {
    try {
        await connectToDB();

        const department = await Department.find({});

        return new Response(JSON.stringify(department), { status: 200 });

    } catch (error) {

        return new Response("Failed to fetch all department", { status: 500 });
        
    }
};
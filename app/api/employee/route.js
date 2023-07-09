import Empolyee from "@models/employee";
import { connectToDB } from "@utils/database";

// GET (read)
export const GET = async (request) => {
    try {
        await connectToDB();

        const employee = await Empolyee.find({});

        return new Response(JSON.stringify(employee), { status: 200 });

    } catch (error) {

        return new Response("Failed to fetch all employee", { status: 500 });
        
    }
};

// DELETE (delete)
export const DELETE = async(request)=>{
    try {
        // console.log(request.url.split("=")[1]);
        await connectToDB();
        const existingEmpolyee = await Empolyee.findById(request.url.split("=")[1]);
        
        await Empolyee.findByIdAndRemove(request.url.split("=")[1]);
        return new Response("Empolyee deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Failed to delete a Empolyees", { status: 500 });
    }
};
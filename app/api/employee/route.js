import Empolyee from "@models/employee";
import { connectToDB } from "@utils/database";

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
import Food from "@models/food";
import { connectToDB } from "@utils/database";

// GET (read)
export const GET = async (request) => {
    try {
        await connectToDB();

        const food = await Food.find({});

        return new Response(JSON.stringify(food), { status: 200 });

    } catch (error) {

        return new Response("Failed to fetch all food", { status: 500 });

    }
};

// DELETE (delete)
export const DELETE = async (request) => {
    try {
        // console.log(request.url.split("=")[1]);
        await connectToDB();
        const existingFood = await Food.findById(request.url.split("=")[1]);

        await Food.findByIdAndRemove(request.url.split("=")[1]);
        return new Response("Food deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Failed to delete a Foods", { status: 500 });
    }
};

// PATCH (update)
export const PATCH = async (request) => {
    const { total } = await request.json();
    try {
        await connectToDB();
        for (let index = 0; index < total?.length; index++) {
            const existingFood = await Food.find({ food_name: total[index] });
            
            if (!existingFood) return new Response("Food not found", { status: 404 });
            
            existingFood[0].count = existingFood[0].count + 1;
            await existingFood[0].save();

            // return new Response(JSON.stringify(existingFood), { status: 200 });
        }
        return new Response("Updated", { status: 200 });
    } catch (error) {
        return new Response("Failed to update a count", { status: 500 });
    }
};
import Food from "@models/food";
import { connectToDB } from "@utils/database";

// POST
export const POST = async (req) => {
    const { food_name } = await req.json();
    const name = food_name.replace(" ", "").toLowerCase();

    try {
        await connectToDB();
        const findFood = await Food.findOne({ food_name: name });
        if (findFood) {

            return new Response("Food Already Exist", { status: 404 });
        }

        const newFood = new Food({ food_name: name, count: 0 });
        await newFood.save();

        return new Response(JSON.stringify(newFood), { status: 201 });

    } catch (error) {

        return new Response("Failed to add a new Food", { status: 500 });

    }
};

// PATCH (update)
export const PATCH = async (request) => {
    try {
        const existingFood = await Food.find({});

        if (!existingFood) return new Response("Food not found", { status: 404 });

        for (let index = 0; index < existingFood?.length; index++) {
                existingFood[index].count = 0;
                await existingFood[index].save();
        }

        // return new Response(JSON.stringify(existingFood), { status: 200 });
        return new Response("Updated", { status: 200 });
    } catch (error) {
        return new Response("Failed to update a count", { status: 500 });
    }
};
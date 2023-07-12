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
    const { total, department_name } = await request.json();
    // console.log(total.length, total);
    try {
        await connectToDB();

            const existingFood = await Food.find({ food_name: total });
            // console.log(existingFood);

        if (!existingFood) return new Response("Food not found", { status: 404 });

        for (let index = 0; index < existingFood?.length; index++) {
            if (department_name === "dept1") {
                existingFood[index].dept1_count = existingFood[index].dept1_count + 1;
                 existingFood[index].save();
            } else if (department_name === "dept2") {
                existingFood[index].dept2_count = existingFood[index].dept2_count + 1;
                 existingFood[index].save();
            } else if (department_name === "dept3") {
                existingFood[index].dept3_count = existingFood[index].dept3_count + 1;
                 existingFood[index].save();
            }else {
                existingFood[index].dept4_count = existingFood[index].dept4_count + 1;
                 existingFood[index].save();
            }
        }

        return new Response("Updated", { status: 200 });
    } catch (error) {
        return new Response("Failed to update a count", { status: 500 });
    }
};
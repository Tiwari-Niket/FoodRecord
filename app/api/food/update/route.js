import Food from "@models/food";
import { connectToDB } from "@utils/database";

// PATCH (update)
export const PATCH = async (request) => {
    const { department_name } = await request.json();
    console.log(department_name);
    try {
        await connectToDB();
        const existingFood = await Food.find({});
        // console.log(existingFood);
        if (!existingFood) return new Response("Food not found", { status: 404 });

        for (let index = 0; index < existingFood?.length; index++) {
            if (department_name === "dept1") {
                existingFood[index].dept1_count = 0;
                await existingFood[index].save();
            } else if (department_name === "dept2") {
                existingFood[index].dept2_count = 0;
                await existingFood[index].save();
            } else if (department_name === "dept3") {
                existingFood[index].dept3_count = 0;
                await existingFood[index].save();
            } else {
                existingFood[index].dept4_count = 0;
                await existingFood[index].save();
            }
        }

        return new Response("Updated", { status: 200 });
    } catch (error) {
        return new Response("Failed to update a count", { status: 500 });
    }
};
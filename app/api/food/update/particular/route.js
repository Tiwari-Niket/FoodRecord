import Food from "@models/food";
import { connectToDB } from "@utils/database";

// PATCH (update)
export const PATCH = async (request) => {
    const { department_name, ordered } = await request.json();
    try {
        await connectToDB();

        for (let index = 0; index < ordered.length; index++) {
            const existingFood = await Food.findOne({food_name: ordered[index]});

            if (!existingFood) return new Response("Food not found", { status: 404 });
            if (department_name === "dept1") {
                existingFood.dept1_count = existingFood.dept1_count - 1;
                await existingFood.save();
            } else if (department_name === "dept2") {
                existingFood.dept2_count = existingFood.dept2_count - 1;
                await existingFood.save();
            } else if (department_name === "dept3") {
                existingFood.dept3_count = existingFood.dept3_count - 1;
                await existingFood.save();
            } else {
                existingFood.dept4_count = existingFood.dept4_count - 1;
                await existingFood.save();
            }
        }

        return new Response("Updated", { status: 200 });
    } catch (error) {
        return new Response("Failed to update a count", { status: 500 });
    }
};

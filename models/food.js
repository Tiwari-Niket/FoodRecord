import { Schema, model, models } from "mongoose";

const FoodSchema = new Schema({
    food_name:{
        type: String,
        required: true
    },
    count:{
        type:Number,
        required:true,
    }
});

const Food = models.Food || model('Food', FoodSchema);
export default Food;
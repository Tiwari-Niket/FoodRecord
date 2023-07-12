import { Schema, model, models } from "mongoose";

const FoodSchema = new Schema({
    food_name:{
        type: String,
        required: true
    },
    dept1_count:{
        type:Number,
        required:true,
    },
    dept2_count:{
        type:Number,
        required:true,
    },
    dept3_count:{
        type:Number,
        required:true,
    },
    dept4_count:{
        type:Number,
        required:true,
    }
});

const Food = models.Food || model('Food', FoodSchema);
export default Food;
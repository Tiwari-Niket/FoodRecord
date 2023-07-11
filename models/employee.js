import { Schema, model, models } from "mongoose";

const EmployeeSchema = new Schema({
    employee_name: {
        type: String,
        required: [true, 'Username is required!'],
    },
    department_name:{
        type: String,
        required: [true, 'Department name is required!'],
    },
    order: {
        type: Array,
        default:[]
    }
});

const Empolyee = models.Employee || model("Employee", EmployeeSchema);

export default Empolyee;
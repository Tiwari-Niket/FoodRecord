import { Schema, model, models } from "mongoose";

const DepartmentSchema = new Schema({
    department_name: {
        type: String,
    }
});

const Department = models.Department || model("Department", DepartmentSchema);

export default Department;
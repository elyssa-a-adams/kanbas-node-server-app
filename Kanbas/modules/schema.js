import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema({
    id: { type: String, required: true},
    name: { type: String, required: true },
    description: String,
    course: String,
    lessons: [],
  },
  { collection: "modules" });
export default moduleSchema;
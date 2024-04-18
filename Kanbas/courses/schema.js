import e from "express";
import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    id: { type: String, required: true},
    name: { type: String, required: true },
    number: String,
    startDate: Date,
    endDate: Date,
    image: String,
    lessons: [],
  },
  { collection: "courses" });
export default courseSchema;
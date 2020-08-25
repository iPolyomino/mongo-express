import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  text: { type: String, required: true },
  done: { type: Boolean, required: true, default: false },
});

module.exports = mongoose.model("Todo", TodoSchema);

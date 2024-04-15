import mongoose from "mongoose";
const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

export default Workout;

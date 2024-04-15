import express from "express";
import Workout from "../model/workoutModel.js";

const router = express.Router();

router.post("/workouts", async (req, res) => {
  try {
    const { name, reps } = req.body;
    const workout = new Workout({ name, reps });
    const savedWorkout = await workout.save();
    res.status(201).json(savedWorkout);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/workouts", async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/workouts/:id", getWorkout, (req, res) => {
  res.json(res.workout);
});

router.patch("/workouts/:id", getWorkout, async (req, res) => {
  if (req.body.name != null) {
    res.workout.name = req.body.name;
  }
  if (req.body.reps != null) {
    res.workout.reps = req.body.reps;
  }
  try {
    const updatedWorkout = await res.workout.save();
    res.json(updatedWorkout);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/workouts/:id", getWorkout, async (req, res) => {
  try {
    await res.workout.deleteOne();
    res.json({ message: "workout deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getWorkout(req, res, next) {
  let workout;
  try {
    workout = await Workout.findById(req.params.id);
    if (workout == null) {
      return res.status(404).json({ message: "workout not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.workout = workout;
  next();
}

export default router;

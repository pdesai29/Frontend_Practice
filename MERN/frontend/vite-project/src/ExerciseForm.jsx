import { useState } from "react";
import axios from "axios";

const ExerciseForm = () => {
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const url = "http://localhost:3000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(url + "/api/workouts", { name, reps });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Exercise name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <button type="submit">Add Exercise</button>
    </form>
  );
};

export default ExerciseForm;

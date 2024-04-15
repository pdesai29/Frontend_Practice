import { useEffect, useState } from "react";
import axios from "axios";

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const url = "http://localhost:3000";
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get(url + "/api/workouts");
        setExercises(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExercises();
  }, []);

  return (
    <div>
      <h2>Exercises</h2>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise._id}>
            <div>{exercise.name}</div>
            <div>{exercise.reps}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;

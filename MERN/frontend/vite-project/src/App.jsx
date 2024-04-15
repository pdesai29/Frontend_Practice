import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExerciseForm from "./ExerciseForm";
import ExerciseList from "./ExerciseList";
function App() {
  return (
    <>
      <div>
        <ExerciseForm />
        <ExerciseList />
      </div>
    </>
  );
}

export default App;

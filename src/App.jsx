import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'/
import CSSBaseline from "@mui/material/CssBaseline";
import { RadioGroupRating } from "./components/PrioritySlider.jsx";
import { TodoList } from "./TodoList.jsx";
import { TodoForm } from "./TodoForm.jsx";
import './App.css'
function App() {
  return (
    <>
    
      {/* <RadioGroupRating /> */}
      <CSSBaseline />
      <TodoList />
      {/* <TodoForm /> */}
      {/* <RadioGroupRating /> */}
    </>
  );
}

export default App;

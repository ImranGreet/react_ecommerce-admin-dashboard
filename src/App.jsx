import { useState } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import "./App.css"; // Example CSS for layout

const App = () => {
  const [isToggled, setIsToggled] = useState(false); // Initial state for sidebar toggle

  const toggleValue = () => {
    setIsToggled((prevState) => !prevState); // Toggle sidebar state
  };

  return (
    <div className="">
      <Nav isToggled={isToggled} toggleValue={toggleValue} />
      <Sidebar isToggled={isToggled} />

      <main className="mt-48 bg-red-400 left-0">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
        eligendi impedit repellat cum est aut molestias ad natus consequuntur
        delectus. Vero amet fugiat aliquam! Placeat architecto possimus est hic
        sunt.
      </main>
    </div>
  );
};

export default App;

import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const MainLayout = () => {
  const [isToggled, setIsToggled] = useState(false); // Initial state for sidebar toggle

  const toggleValue = () => {
    setIsToggled((prevState) => !prevState); // Toggle sidebar state
  };
  return (
    <>
      <div className="">
        <Nav isToggled={isToggled} toggleValue={toggleValue} />
        <Sidebar isToggled={isToggled} />

        <main className="mt-48  ml-96">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;

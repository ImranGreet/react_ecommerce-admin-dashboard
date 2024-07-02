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
      <div className="w-full">
        <Nav isToggled={isToggled} toggleValue={toggleValue} />
        <Sidebar isToggled={isToggled} />

        <main
          className={`px-1 max-h-screen  mx-auto fixed  z-0 overflow-y-auto my-24 right-2 ${
            isToggled ? "w-[92%]  " : "w-[84%] "
          } `}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;

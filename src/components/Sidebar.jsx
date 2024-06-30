import { sidebarItems } from "./Utilities/sidebarUtilities.jsx";

const Sidebar = ({ isToggled, toggleValue }) => {
  return (
    <>
      <aside
        id="logo-sidebar"
        className={`fixed top-20 bottom-0 left-0 h-full border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${
          isToggled ? "w-36" : "w-72"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium mt-10">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {item.icon}
                  <span className={` ${isToggled ? "hidden" : "inline"}`}>
                    {item.title}
                  </span>
                  {item.badge && (
                    <span
                      className={`inline-flex items-center justify-center px-2  text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300`}
                    >
                      {item.badge}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

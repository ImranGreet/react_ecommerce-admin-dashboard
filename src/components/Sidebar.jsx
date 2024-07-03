import { sidebarItems } from "./Utilities/sidebarUtilities.jsx";

const Sidebar = ({ isToggled, toggleValue }) => {
  return (
    <>
      <aside
        id="logo-sidebar"
        className={`sidebar sidebar-fixed-left  ${
          isToggled ? "w-36" : "w-72"
        }`}
        aria-label="Sidebar"
      >
        <div className="sidebar-content">
          <ul className="sidebar-list">
            {sidebarItems.map((item, index) => (
              <li key={index} className="sidebar-item">
                <a
                  href={item.href}
                  className="sidebar-route group"
                >
                  {item.icon}
                  <span className={` ${isToggled ? "hidden" : "inline"}`}>
                    {item.title}
                  </span>
                  {item.badge && (
                    <span
                      className={`sidebar-route-text`}
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

import {
  FaPencil,
  FaUser,
  FaArrowsToCircle,
  FaGlobe,
  FaGear,
  FaRightFromBracket,
} from "react-icons/fa6";

const AuthInfo = ({ showComp }) => {
  const menuItems = [
    { icon: <FaPencil />, text: "Edit Profile", href: "#" },
    { icon: <FaUser />, text: "View Profile", href: "#" },
    { icon: <FaArrowsToCircle />, text: "Help Center", href: "#" },
    { icon: <FaGlobe />, text: "Forum", href: "#" },
    { icon: <FaGear />, text: "Account Settings", href: "#" },
    { icon: <FaRightFromBracket />, text: "Logout", href: "#" },
  ];

  return (
    <ul
      className={`ul-notification-container absolute top-20 right-10 z-40  bg-white ${
        showComp.authInfo ? "block" : "hidden"
      }`}
    >
      {menuItems.map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            className="button-content-flex-start-center w-full py-2"
          >
            <span className="inline-block mr-1">{item.icon}</span>
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default AuthInfo;

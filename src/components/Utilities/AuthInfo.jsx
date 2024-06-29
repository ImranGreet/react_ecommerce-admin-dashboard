import {
  FaPencil,
  FaUser,
  FaArrowsToCircle,
  FaGlobe,
  FaGear,
  FaRightFromBracket,
} from "react-icons/fa6";

const AuthInfo = () => {
  return (
    <ul className="border border-gray-500/15 w-64 px-3 py-5 rounded-md shadow-lg flex flex-col justify-between gap-y-2">
      <li>
        <a href="#">
          <span className="inline-block mr-3">
            <FaPencil />
          </span>
          Edit Profile
        </a>
      </li>
      <li>
        <a href="#">
          <span className="inline-block mr-3">
            <FaUser />
          </span>
          View Profile
        </a>
      </li>
      <li>
        <div className="w-full h-0.5 bg-gray-500/35"></div>
      </li>
      <li>
        <a href="#">
          <span className="inline-block mr-3">
            <FaArrowsToCircle />
          </span>
          Help Center
        </a>
      </li>
      <li>
        <a href="#">
          <span className="inline-block mr-3">
            <FaGlobe />
          </span>
          Forum{" "}
        </a>
      </li>
      <li>
        <a href="#">
          <span className="inline-block mr-3">
            <FaGear />
          </span>
          Account Settings{" "}
        </a>
      </li>
      <li>
        <div className="w-full h-0.5 bg-gray-500/35"></div>
      </li>
      <li>
        <a href="#">
          <span className="inline-block mr-3">
            <FaRightFromBracket />
          </span>
          Logout{" "}
        </a>
      </li>
    </ul>
  );
};

export default AuthInfo;

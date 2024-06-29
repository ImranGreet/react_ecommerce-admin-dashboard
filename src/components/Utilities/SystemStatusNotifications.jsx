
import ProfileImage from "../../assets/react.svg";
const SystemStatusNotifications = () => {
  return (
    <>
     <ul className="border border-gray-500/15 w-64 px-3 py-5 rounded-md shadow-lg flex flex-col justify-between gap-y-2">
        <li>
          <a href="#">
            <span className="inline-block mr-3">
              <img src={ProfileImage} alt="" />
            </span>
            <span>Jhon Send </span>
            <span>Server Overloaded</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="inline-block mr-3">
              <img src={ProfileImage} alt="" />
            </span>
            <span>Xennifer </span>
            <span>New User Registered</span>
          </a>
        </li>
        <li>
          <div className="w-full h-0.5 bg-gray-500/35"></div>
        </li>
        <li>
          <a href="#">
            <span className="inline-block mr-3">
              <img src={ProfileImage} alt="" />
            </span>
            <span>Greg Sender </span>
            <span>Application Error</span>
          </a>
        </li>
        <li>
          <div className="w-full h-0.5 bg-gray-500/35"></div>
        </li>
        <li>
          <a href="#">
            <span>See All Tasks</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default SystemStatusNotifications;

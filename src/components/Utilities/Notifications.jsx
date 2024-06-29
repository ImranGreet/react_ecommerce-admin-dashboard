import ProfileImage from "../../assets/react.svg";

const Notifications = () => {
  return (
    <>
      <ul className="border border-gray-500/15 w-64 px-3 py-5 rounded-md shadow-lg flex flex-col justify-between gap-y-2">
        <li>
          <a href="#">
            <span className="inline-block mr-3">
              <img src={ProfileImage} alt="" />
            </span>
            <span>Jhon Send a message </span>
            <span>12 mins ago</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="inline-block mr-3">
              <img src={ProfileImage} alt="" />
            </span>
            <span>Jhon Send a message </span>
            <span>12 mins ago</span>
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
            <span>Jhon Send a message </span>
            <span>12 mins ago</span>
          </a>
        </li>
        <li>
          <div className="w-full h-0.5 bg-gray-500/35"></div>
        </li>
        <li>
          <a href="#">
            <span>View More Messages</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Notifications;

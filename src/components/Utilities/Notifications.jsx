import ProfileImage from "../../assets/react.svg";

const Notifications = ({showComp}) => {
  const people = [
    { name: "Alice", period: 15 },
    { name: "Bob", period: 22 },
    { name: "Charlie", period: 7 },
  ];
  return (
    <>
      <ul className={`ul-notification-container nav-card-position right-10 notifications bg-white ${
        showComp.notification ? "block" : "hidden"
      }`}>
        {people.map((notifier, index) => (
          <li key={index}>
            <a href="#" className="button-content-flex-col-start-start p-2">
              <span className="flex">
                <img
                  src={ProfileImage}
                  alt=""
                  width="20"
                  height="10"
                  className="mr-2"
                />
                <span> {notifier.name} Send a message </span>
              </span>

              <span className="ml-8"> {notifier.period} mins ago</span>
            </a>
          </li>
        ))}

        <li className="my-4 ml-8">
          <a href="#">
            <span>View More Messages</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Notifications;

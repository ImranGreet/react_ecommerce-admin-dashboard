import ProfileImage from "../../assets/react.svg";
const SystemStatusNotifications = ({showComp}) => {
  const notifications = [
    {
      notifier: { name: "Alice" },
      notice: { message: "Server error", period: 15 },
    },
    {
      notifier: { name: "Bob" },
      notice: { message: "New registration", period: 22 },
    },
    {
      notifier: { name: "Charlie" },
      notice: { message: "Server error", period: 7 },
    },
  ];
  return (
    <>
      <ul className={`ul-notification-container nav-card-position right-8 systemStatus bg-white ${
        showComp.showSystemNotice ? "block" : "hidden"
      }`}>
        {notifications.map((notice, index) => (
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
                <span>{notice.notifier.name} </span>
              </span>

              <span  className="ml-8">{notice.notice.message}</span>
            </a>
          </li>
        ))}

        <li className="my-4 ml-8">
          <a href="#">
            <span>See All Tasks</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default SystemStatusNotifications;

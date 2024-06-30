import ProfileImage from "../../assets/react.svg";
const Languages = ({showComp}) => {
  const countries = [
    { name: "United States" },
    { name: "Canada" },
    { name: "United Kingdom" },
    { name: "France" },
    { name: "Germany" },
    { name: "Australia" },
    { name: "Japan" },
    { name: "India" },
    { name: "China" },
    { name: "Brazil" },
  ];

  return (
    <ul className={`ul-notification-container absolute top-20  right-24  bg-white ${
      showComp.language ? "block" : "hidden"
    }`}>
      <li className="p-2 font-bold text-xl">
        <h2>Select Any Language</h2>
      </li>
      {countries.map((country, index) => (
        <li key={index} >
          <button className="button-content-flex-start-center  w-full  py-2 ">
            {" "}
            <img src={ProfileImage} width="20" height="10" />
            <p>{country.name}</p>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Languages;

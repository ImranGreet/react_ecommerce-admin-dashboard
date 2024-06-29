
import ProfileImage from "../../assets/react.svg";
const Languages = () => {
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
    <ul className="border border-gray-500/15 w-64 px-3 py-5 rounded-md shadow-lg flex flex-col justify-between gap-y-2">
      {countries.map((country, index) => (
        <li key={index} className="country">
         <button> <img
            src={ProfileImage}
            
            width="20"
            height="10"
          />
          <p>{country.name}</p></button>
        </li>
      ))}
    </ul>
  );
};

export default Languages;

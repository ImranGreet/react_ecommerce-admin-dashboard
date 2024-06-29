import AuthImage from "../../assets/react.svg";

const Profile = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-center gap-y-3">
        <img src={AuthImage} alt=""  className="rounded-full w-36 h-36"/>
        <div>
            <h1>Imran Hossain</h1>
        </div>
      </div>
    </>
  );
};

export default Profile;

import Profile from "../assets/react.svg";

const Nav = () => {
  return (
    <>
      <nav className="bg-inherit px-4 py-4 shadow-lg ">
        <div className="flex justify-between items-center">
          <div className="">
            <h1>Xenmesh Commerce</h1>
          </div>
          
          {/* search field */}
          <div className="self-start">
            <form action="#" method="post">
              <div>
                <label htmlFor="searchparams" className="sr-only">
                  Search Parameter
                </label>
                <input
                  type="text"
                  name="searchparams"
                  id="searchparams"
                  placeholder="Search Your Query"
                  className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
                />
              </div>
            </form>
          </div>
          {/* settings and params */}
          <div>
            <ul className="flex gap-x-2">
              <li>
                <a className="flex gap-x-3" role="button">
                  <span>Imran</span>
                  <img src={Profile} alt="Profile Picture of Imran" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

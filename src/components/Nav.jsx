import { FaBars, FaBell, FaRotateRight, FaFlagUsa } from "react-icons/fa6";
import Profile from "../assets/react.svg";
/*components*/
import AuthInfo from "./Utilities/AuthInfo";
import Languages from "../components/Utilities/Languages";
import Notifications from "./Utilities/Notifications";
import SystemStatusNotification from "./Utilities/SystemStatusNotifications";
/*scripts*/
import { useState, useEffect } from "react";
import { showUtlityComponent as initialUtilityState } from "../scripts/utlity";

const Nav = ({ isToggled, toggleValue }) => {
    const [showComp, setShowComp] = useState(initialUtilityState);

    const toggleComponent = (key) => {
        setShowComp((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest(".authorised-button")) {
            setShowComp((prevState) => ({
                ...prevState,
                authInfo: false,
            }));
        } else if (!event.target.closest(".language-button")) {
            setShowComp((prevState) => ({
                ...prevState,
                language: false,
            }));
        } else if (!event.target.closest(".notifications-button")) {
            setShowComp((prevState) => ({
                ...prevState,
                notification: false,
            }));
        } else if (!event.target.closest(".system-status-button")) {
            setShowComp((prevState) => ({
                ...prevState,
                showSystemNotice: false,
            }));
        }
    };

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav className="header__navigation  ">
                <div
                    className={`brand-name-logo ${isToggled ? "w-36" : "w-72"}`}
                >
                    <h1>
                        <img
                            src={Profile}
                            alt=""
                            width="30"
                            height="20"
                            className="inline-block"
                        />

                        <span
                            className={`${isToggled ? "hidden" : "inline-block"} ml-4`}
                        >
                            Xenmesh
                        </span>
                    </h1>
                </div>
                <div className="navbar__left-section flex-1">
                    <div className="flex ">
                        <button
                            className="navbar-screen-toggler-button"
                            onClick={toggleValue}
                        >
                            <FaBars />
                        </button>
                        <form
                            action="#"
                            method="post"
                            className="w-72"
                        >
                            <div>
                                <label
                                    htmlFor="searchparams"
                                    className="sr-only"
                                >
                                    Search Parameter
                                </label>
                                <input
                                    type="text"
                                    name="searchparams"
                                    id="searchparams"
                                    placeholder="Search Your Query"
                                    className="navbar__search-input"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="relative">
                        <ul className="flex gap-x-2 justify-center">
                            <li>
                                <button
                                    className="language-button navbar-cart-cotroller  "
                                    onClick={() => toggleComponent("language")}
                                >
                                    <FaFlagUsa className="text-xl" />
                                </button>
                            </li>
                            <li>
                                <button
                                    className="notifications-button   navbar-cart-cotroller"
                                    onClick={() =>
                                        toggleComponent("notification")
                                    }
                                >
                                    <FaBell className="text-xl" />
                                </button>
                            </li>
                            <li>
                                <button
                                    className="system-status-button navbar-cart-cotroller 
                 "
                                    onClick={() =>
                                        toggleComponent("showSystemNotice")
                                    }
                                >
                                    <FaRotateRight className="text-xl" />
                                </button>
                            </li>
                            <li className="border-l p-2 text-center border-gray-400/30 mr-2">
                                <a
                                    className="authorised-button inline-flex cursor-pointer"
                                    role="button"
                                    onClick={() => toggleComponent("authInfo")}
                                >
                                    <span>Xennifer</span>
                                    <img
                                        src={Profile}
                                        alt="Profile Picture of Imran"
                                        width="30"
                                        height="10"
                                        className="ml-5"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <AuthInfo showComp={showComp} />
            <Notifications showComp={showComp} />
            <Languages showComp={showComp} />
            <SystemStatusNotification showComp={showComp} />
        </>
    );
};

export default Nav;

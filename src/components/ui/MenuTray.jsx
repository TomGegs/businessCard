import { BsFillPersonFill } from "react-icons/bs";
import { HiEnvelope } from "react-icons/hi2";
import { BiSolidShapes } from "react-icons/bi";
import { useState } from "react";

const MenuTray = () => {
    const [currentButton, setCurrentButton] = useState("profileButton");

    const handleButtonClick = (buttonName) => {
        setCurrentButton(buttonName);
    };

    return (
        <div className="absolute bottom-0 left-0 w-[100dvw] bg-gray-300 h-[70px] px-5">
            <div className="grid grid-cols-3 gap-5 h-full text-center content-center">
                <button
                    className={`h-full w-full align-middle transition-all duration-300  ${
                        currentButton === "profileButton"
                            ? "text-blue-600"
                            : "hover:text-blue-300 text-gray-500"
                    }`}
                    type="button"
                    onClick={() => handleButtonClick("profileButton")}>
                    <BsFillPersonFill className="mx-auto text-3xl" />
                    <p className="">
                        {currentButton === "profileButton" ? "About" : ""}
                    </p>
                </button>
                <button
                    className={`h-full w-full align-middle transition-all duration-300 ${
                        currentButton === "skillsButton"
                            ? "text-blue-600"
                            : "hover:text-blue-300 text-gray-500"
                    }`}
                    type="button"
                    onClick={() => handleButtonClick("skillsButton")}>
                    <BiSolidShapes className="mx-auto text-3xl" />
                    <p className="">
                        {currentButton === "skillsButton" ? "Skills" : ""}
                    </p>
                </button>
                <button
                    className={`h-full w-full align-middle transition-all duration-300 ${
                        currentButton === "hireButton"
                            ? "text-blue-600"
                            : "hover:text-blue-300 text-gray-500"
                    }`}
                    type="button"
                    onClick={() => handleButtonClick("hireButton")}>
                    <HiEnvelope className="mx-auto text-3xl " />
                    <p className="">
                        {currentButton === "hireButton" ? "Hire me" : ""}
                    </p>
                </button>
            </div>
        </div>
    );
};

export default MenuTray;

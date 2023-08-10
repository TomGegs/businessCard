import { BsFillPersonFill as AboutIcon } from "react-icons/bs";
import { HiEnvelope as ContactIcon } from "react-icons/hi2";
import { BiSolidShapes as SkillsIcon } from "react-icons/bi";

import { useState } from "react";
import { Link } from "react-router-dom";

const MenuTray = () => {
    const [activeButton, setActiveButton] = useState("About");

    const navigation = [
        { name: "About", link: "/", icon: AboutIcon, current: true },
        {
            name: "Skills",
            link: "/skills",
            icon: SkillsIcon,
            current: false,
        },
        {
            name: "Contact",
            link: "/contact",
            icon: ContactIcon,
            current: false,
        },
    ];
    return (
        <div className="fixed bottom-0  mx-auto w-full flex-col max-w-[560px] flex h-16 ">
            <div className="h-[1px] block z-10 bg-gray-600 opacity-20 w-full" />
            <div className="flex space-x-4 justify-around w-full flex-row px-4">
                {navigation.map((item) => (
                    <Link to={item.link} key={item.name}>
                        <button
                            className={`h-full w-16 pt-3 text-center mx-auto  ${
                                activeButton === item.name
                                    ? "text-white rounded-md font-medium"
                                    : "text-gray-600 hover:text-primary transition-all duration-300"
                            }`}
                            onClick={() => setActiveButton(item.name)}
                            aria-current={item.current ? "page" : undefined}>
                            <item.icon className="flex mx-auto text-[20px]" />
                            {item.name}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MenuTray;

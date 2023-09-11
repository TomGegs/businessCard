import { BsFillPersonFill as AboutIcon } from 'react-icons/bs';
import { HiEnvelope as ContactIcon } from 'react-icons/hi2';
import { BiSolidShapes as SkillsIcon } from 'react-icons/bi';

import { useState } from 'react';
import { Link } from 'react-router-dom';

function MenuTray() {
    const [activeButton, setActiveButton] = useState('About');

    const navigation = [
        { name: 'About', link: '/', icon: AboutIcon, current: true },
        {
            name: 'Skills',
            link: '/skills',
            icon: SkillsIcon,
            current: false,
        },
        {
            name: 'Contact',
            link: '/contact',
            icon: ContactIcon,
            current: false,
        },
    ];
    return (
        <div className="fixed bottom-0  mx-auto flex h-16 w-full max-w-[560px] flex-col ">
            <div className="z-10 block h-[1px] w-full bg-gray-600 opacity-20" />
            <div className="flex w-full flex-row justify-around space-x-4 px-4">
                {navigation.map((item) => (
                    <Link to={item.link} key={item.name}>
                        <button
                            type="button"
                            className={`mx-auto h-full w-16 pt-3 text-center  ${
                                activeButton === item.name
                                    ? 'rounded-md font-medium text-white'
                                    : 'text-gray-600 transition-all duration-300 hover:text-primary'
                            }`}
                            onClick={() => setActiveButton(item.name)}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            <item.icon className="mx-auto flex text-[20px]" />
                            {item.name}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default MenuTray;

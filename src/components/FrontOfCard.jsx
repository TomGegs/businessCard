import { useEffect, useState } from "react";

import IconButtons from "./buttons/IconButtons";
import logoIcon from "/assets/images/logoIcon.svg";

import { FaLaptopCode, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineDoubleRight } from "react-icons/ai";

const FrontOfCard = ({ flipCard }) => {
    const [nextTextIndex, setNextTextIndex] = useState(3);
    const [currentInTextIndex, setCurrentInTextIndex] = useState(2);
    const [currentOutTextIndex, setCurrentOutTextIndex] = useState(1);
    const [prevTextIndex, setPrevTextIndex] = useState(0);

    const loopText = [
        "React Developer",
        "Web Developer",
        "Product Manager",
        "Growth Manager",
        "Digital Marketer",
        "Entrepreneur",
    ];

    //Loop through loopText array
    useEffect(() => {
        const textIndexInterval = setInterval(() => {
            setNextTextIndex((prevIndex) => (prevIndex + 1) % loopText.length);
            setCurrentInTextIndex(
                (prevIndex) => (prevIndex + 1) % loopText.length
            );
            setCurrentOutTextIndex(
                (prevIndex) => (prevIndex + 1) % loopText.length
            );
            setPrevTextIndex((prevIndex) => (prevIndex + 1) % loopText.length);
        }, 1500);

        return () => clearInterval(textIndexInterval);
    }, [loopText.length]);

    return (
        <div className="tracking-tighter flex flex-col h-full text-base md:text-lg">
            <p className="text-2xl whitespace-normal uppercase [text-shadow:_0_0_0.3em_currentColor]">
                Tom Geoghegan
            </p>
            {/* looping subheader and logo*/}
            <div className="flex flex-row select-none ">
                <img
                    src={logoIcon}
                    alt="logo icon on business card"
                    className="w-12 mr-4 flex"
                />
                <div className="font-light overflow-visible min-w-[150px]">
                    {/* Queued text */}
                    {loopText.map((text, index) => (
                        <p
                            key={index}
                            className={`${
                                nextTextIndex === index
                                    ? "animate-appearText "
                                    : "hidden"
                            }`}>
                            {text}
                        </p>
                    ))}

                    {/* Current text - animated 'in' */}
                    {loopText.map((text, index) => (
                        <p
                            key={index}
                            className={`${
                                currentInTextIndex === index
                                    ? "animate-slideInText"
                                    : "hidden"
                            }`}>
                            {text}
                        </p>
                    ))}

                    {/* Current text- animated 'out' */}
                    {loopText.map((text, index) => (
                        <p
                            key={index}
                            className={`${
                                currentOutTextIndex === index
                                    ? "animate-slideOutText"
                                    : "hidden"
                            }`}>
                            {text}
                        </p>
                    ))}

                    {/* Previous text */}
                    {loopText.map((text, index) => (
                        <p
                            key={index}
                            className={`${
                                prevTextIndex === index
                                    ? "animate-disappearText"
                                    : "hidden"
                            }`}>
                            {text}
                        </p>
                    ))}
                </div>
            </div>
            <div className="flex flex-row flex-wrap h-full content-end font-Unbounded text-xs font-light justify-between">
                <div className="flex flex-col">
                    <p>tomgegs@outlook.com</p>
                    <p>0407 250 035</p>
                </div>
                <div>
                    <IconButtons
                        iconName={<FaLinkedinIn />}
                        url="https://www.linkedin.com/in/thomas-geoghegan/"
                    />
                    <IconButtons
                        iconName={<FaLaptopCode />}
                        url="https://tomg-portfolio.netlify.app/"
                    />
                    <IconButtons
                        noNewTab={true}
                        iconName={
                            <AiOutlineDoubleRight
                                className="animate-pulse text-3xl"
                                onClick={flipCard}

                            />
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default FrontOfCard;

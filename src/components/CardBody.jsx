import { useState, useEffect } from "react";
import logoIcon from "/assets/images/logoIcon.svg";

import { FaLinkedinIn, FaLaptopCode } from "react-icons/fa";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import IconButtons from "./buttons/IconButtons";

const CardBody = () => {
    const [rotateStyles, setRotateStyles] = useState({
        rotateX: 0,
        rotateY: 0,
    });
    const [nextTextIndex, setNextTextIndex] = useState(3);
    const [currentInTextIndex, setCurrentInTextIndex] = useState(2);
    const [currentOutTextIndex, setCurrentOutTextIndex] = useState(1);
    const [prevTextIndex, setPrevTextIndex] = useState(0);

    const [flip, setFlip] = useState(false);
    const [flipBack, setFlipBack] = useState(false);

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

    //Location tracking
    // Function to update rotation styles based on mouse position or finger movement
    const rotateElement = (event) => {
        const clientX = event.touches
            ? event.touches[0].clientX
            : event.clientX;
        const clientY = event.touches
            ? event.touches[0].clientY
            : event.clientY;

        // Calculate the middle of the screen
        const middleX = window.innerWidth / 2;
        const middleY = window.innerHeight / 2;

        // Calculate the offset of the mouse pointer/finger from the middle of the screen
        const offsetX = ((clientX - middleX) / middleX) * 25;
        const offsetY = ((clientY - middleY) / middleY) * 25;

        // Update the state with new rotation values
        setRotateStyles({
            rotateX: offsetX,
            rotateY: -offsetY,
        });
    };

    // Add and remove the event listener
    useEffect(() => {
        const eventHandler =
            "ontouchstart" in window ? "touchmove" : "mousemove";

        document.addEventListener(eventHandler, rotateElement);

        return () => {
            document.removeEventListener(eventHandler, rotateElement);
        };
    }, []); //Empty array so effect runs only on mount

    // Create a style object with the rotation values
    const style = {
        "--rotateX": `${rotateStyles.rotateX}deg`,
        "--rotateY": `${rotateStyles.rotateY}deg`,
    };

    const clickFlip = {
        "--rotateX": `180deg`,
        "--rotateY": `0deg`,
        transition: "transform 1s",
    };
    const clickFlipBack = {
        "--rotateX": `-180deg`,
        "--rotateY": `0deg`,
        transition: "transform 1s",
    };

    return (
        //wrapper
        <pre
            tabIndex="0"
            style={flip ? clickFlip : flipBack ? clickFlipBack : style}
            className="card font-Unbounded">
            {/* Front of card */}
            <section className="tracking-tighter flex flex-col text-base md:text-lg front ">
                {/* header */}
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
                <div className="flex flex-row flex-wrap mt-2 font-Unbounded text-xs font-light justify-between">
                    <div className="flex flex-col">
                        <p>tomgegs@outlook.com</p>
                        <p>0407 250 035</p>
                    </div>
                    <div>
                        <IconButtons
                            iconName={<FaLinkedinIn />}
                            url="https://www.linkedin.com/in/tomgeoghegan/"
                        />
                        <IconButtons
                            iconName={<FaLaptopCode />}
                            url="https://tomg-portfolio.netlify.app/"
                        />
                        <IconButtons
                            noNewTab={true}
                            iconName={
                                <AiOutlineDoubleRight
                                    className="animate-pulse"
                                    onClick={() => setFlip(!flip)}
                                />
                            }
                        />
                    </div>
                </div>
            </section>
            {/* holo middle panel */}
            <section className="middle"></section>
            {/* Back of card */}
            <section className="back">
                <IconButtons
                    noNewTab={true}
                    iconName={
                        <AiOutlineDoubleLeft
                            className="animate-pulse"
                            onClick={() => setFlipBack(!flipBack)}
                        />
                    }
                />
            </section>
        </pre>
    );
};

export default CardBody;

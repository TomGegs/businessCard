import { useEffect, useState } from 'react';

// eslint-disable-next-line import/no-absolute-path

import { FaLaptopCode, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import logoIcon from '../assets/images/logoIcon.svg';
import IconButtons from './buttons/IconButtons';

function FrontOfCard({ flipCard }) {
    const [nextTextIndex, setNextTextIndex] = useState(3);
    const [currentInTextIndex, setCurrentInTextIndex] = useState(2);
    const [currentOutTextIndex, setCurrentOutTextIndex] = useState(1);
    const [prevTextIndex, setPrevTextIndex] = useState(0);

    const loopText = [
        'React Developer',
        'Web Developer',
        'Product Manager',
        'Growth Manager',
        'Digital Marketer',
        'Entrepreneur',
    ];

    // Cycle through loopText array
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
        <div className="flex h-full flex-col text-base tracking-tighter md:text-lg">
            <p className="whitespace-normal text-2xl uppercase [text-shadow:_0_0_0.3em_currentColor]">
                Tom Geoghegan
            </p>
            {/* looping subheader and logo */}
            <div className="flex select-none flex-row ">
                <img
                    src={logoIcon}
                    alt="logo icon on business card"
                    className="mr-4 flex w-12"
                />
                <div className="min-w-[150px] overflow-visible font-light">
                    {/* Queued text */}
                    {loopText.map((text, index) => (
                        <p
                            key={text[index]}
                            className={`${
                                nextTextIndex === index
                                    ? 'animate-appearText '
                                    : 'hidden'
                            }`}
                        >
                            {text}
                        </p>
                    ))}

                    {/* Current text - animated 'in' */}
                    {loopText.map((text, index) => (
                        <p
                            key={text[index]}
                            className={`${
                                currentInTextIndex === index
                                    ? 'animate-slideInText'
                                    : 'hidden'
                            }`}
                        >
                            {text}
                        </p>
                    ))}

                    {/* Current text- animated 'out' */}
                    {loopText.map((text, index) => (
                        <p
                            key={text[index]}
                            className={`${
                                currentOutTextIndex === index
                                    ? 'animate-slideOutText'
                                    : 'hidden'
                            }`}
                        >
                            {text}
                        </p>
                    ))}

                    {/* Previous text */}
                    {loopText.map((text, index) => (
                        <p
                            key={text[index]}
                            className={`${
                                prevTextIndex === index
                                    ? 'animate-disappearText'
                                    : 'hidden'
                            }`}
                        >
                            {text}
                        </p>
                    ))}
                </div>
            </div>
            <div className="flex h-full flex-row flex-wrap content-end justify-between font-Unbounded text-xs font-light">
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
                        noNewTab
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
}

export default FrontOfCard;

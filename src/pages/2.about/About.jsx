import { BsFillPersonPlusFill } from "react-icons/bs";

const About = () => {
    return (
        <div className="h-[calc(100dvh-64px)] w-full text-center flex flex-col justify-center">
            <h1 className="uppercase max-[320px]:text-[2rem] text-[2.5rem] text-white font-Unbounded">
                Tom Geoghegan
            </h1>
            <div className="relative mt-12 mx-auto ">
                <div className=" absolute animate-gradient  h-16 min-w-[65px] bg-gradient-to-r from-primary via-altSecond to-secondary blur-lg" />
                <button className="text-white rounded-2xl min-w-[64px] min-h-[64px] translate-y-0  text-center items-center bg-bgSecondary">
                    <BsFillPersonPlusFill className="mx-auto text-[30px] translate-x-0.5 " />
                </button>
            </div>
        </div>
    );
};

export default About;

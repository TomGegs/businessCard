import { BsFillPersonPlusFill } from 'react-icons/bs';

function About() {
    return (
        <div className="flex h-[calc(100dvh-64px)] w-full flex-col justify-center text-center">
            <h1 className="font-Unbounded text-[2.5rem] uppercase text-white max-[320px]:text-[2rem]">
                Tom Geoghegan
            </h1>
            <div className="relative mx-auto mt-12 ">
                <div className="absolute h-16 min-w-[65px] animate-gradient bg-gradient-to-r from-primary via-altSecond to-secondary blur-lg" />
                <button
                    type="button"
                    className="min-h-[64px] min-w-[64px] translate-y-0 items-center rounded-2xl  bg-bgSecondary text-center text-white"
                >
                    <BsFillPersonPlusFill className="mx-auto translate-x-0.5 text-[30px] " />
                </button>
            </div>
        </div>
    );
}

export default About;

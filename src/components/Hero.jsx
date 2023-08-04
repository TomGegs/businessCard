import heroImage from "/assets/images/myHeadshot.webp";
import { TbBrandGithubFilled } from "react-icons/tb";
import { HiEnvelope } from "react-icons/hi2";
import { FaLinkedinIn } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import IconButtons from "./ui/IconButtons";

const Hero = ({ title, subTitle }) => {
    return (
        <div className="flex flex-col w-full h-full border-gray-800 border-2 rounded-3xl gap-y-4 p-6">
            {/* Text */}
            <div>
                <h1 className="text-4xl">{title}</h1>
                <h2 className="px-1">{subTitle}</h2>
            </div>
            <img
                src={heroImage}
                alt="tom geoghegan headshot"
                className="w-[250px]  h-[200px] rounded-3xl bg-gray-800 object-cover object-center m-4 mx-auto"
            />
            <div className="relative justify-center w-full mx-auto">
                <div className="left-4.5 absolute -top-1 h-16 w-full animate-gradientFast bg-gradient-to-r from-primary via-altSecond to-secondary blur-md" />

                <button
                    className=" relative flex w-full justify-center rounded-xl text-white  bg-bgPrimary py-4 hover:text-primary active:translate-y-0.5 active:scale-95 gap-x-2 font-semibold font place-items-center"
                    type="button">
                    <BsDownload />
                    <p>Add to contacts</p>
                </button>
            </div>
            <div className="flex justify-center">
                <IconButtons
                    iconName={<TbBrandGithubFilled />}
                    url="https://github.com/TomGegs"
                />
                <IconButtons iconName={<HiEnvelope />} />
                <IconButtons
                    iconName={<FaLinkedinIn />}
                    url="https://www.linkedin.com/in/thomas-geoghegan/"
                />
            </div>
        </div>
    );
};

export default Hero;

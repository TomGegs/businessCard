import heroImage from '/assets/images/myHeadshot.webp';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { HiEnvelope } from 'react-icons/hi2';
import { FaLinkedinIn } from 'react-icons/fa';
import IconButtons from '../../components/buttons/IconButtons';

function Hero({ title, subTitle }) {
    return (
        <div className="flex h-[50dvh] w-full flex-col gap-y-4 ">
            {/* Text */}
            <img
                src={heroImage}
                alt="tom geoghegan headshot"
                className="mx-auto h-[250px] w-full rounded-b-3xl bg-gray-800 object-cover object-center"
            />
            <div>
                <h1 className="text-4xl">{title}</h1>
                <h2 className="px-1">{subTitle}</h2>
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
}

export default Hero;

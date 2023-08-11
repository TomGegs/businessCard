import { BsFillPersonPlusFill } from "react-icons/bs";
import CardBody from "../../components/CardBody";

const Skill = () => {
    return (
        <main className="h-full w-full relative items-center mx-auto align-middle object-center flex-col justify-center flex">
            <CardBody />
            {/* <section className="relative  mx-auto ">
                <div className=" absolute animate-gradient h-16 min-w-[65px] bg-gradient-to-r from-primary via-altSecond to-secondary blur-lg" />
                <button className="text-white rounded-2xl min-w-[64px] min-h-[64px] translate-y-0 duration-500 hover:text-altSecond active:translate-y-0.5 active:scale-95 gap-x-2 transition-all text-center items-center bg-bgSecondary">
                    <BsFillPersonPlusFill className="mx-auto text-[30px] translate-x-0.5 " />
                </button>
            </section> */}
        </main>
    );
};

export default Skill;

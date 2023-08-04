import Hero from "./Hero";
import MenuTray from "./ui/MenuTray";

const MainBody = () => {
    return (
        <div className="px-4">
            <Hero title={"Tom Geoghegan"} subTitle={"React Developer"} />
            <MenuTray />
        </div>
    );
};

export default MainBody;

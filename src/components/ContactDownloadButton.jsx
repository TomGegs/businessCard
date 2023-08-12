import { BsFillPersonPlusFill } from "react-icons/bs";
import vCardsJS from "vcards-js";

const ContactDownloadButton = () => {
    const downloadTxtFile = (vcfText) => {
        const element = document.createElement("a");
        const file = new Blob([vcfText], { type: "text/plain;charset=utf-8" });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.vcf";
        document.body.appendChild(element);
        element.click();
    };
    const CreateVCard = () => {
        //create a new vCard
        var vCard = new vCardsJS();

        //set properties
        vCard.firstName = "Tom";
        vCard.lastName = "Geoghegan";
        vCard.title = "React Developer";
        vCard.workPhone = "0407250035";
        vCard.workEmail = "tomgegs@outlook.com";
        vCard.workAddress.city = "Brisbane";
        vCard.socialUrls["LinkedIn"] =
            "https://www.linkedin.com/in/thomas-geoghegan";
        vCard.socialUrls["Github"] = "https://github.com/TomGegs";

        vCard.url = "https://tomg-portfolio.netlify.app/";
        vCard.photo.embedFromFile("/assets/images/myHeadshot.webp");

        vCard.note = "Notes on Eric";

        vCard.saveToFile("./tom-geoghegan.vcf");
        return vCard.getFormattedString();
    };

    return (
        <div className="h-[40%] flex flex-col gap-y-6">
            <section className="relative w-fit flex flex-col justify-center mx-auto ">
                <div className=" absolute animate-gradient h-16 min-w-[65px] bg-gradient-to-r from-primary via-altSecond to-secondary blur-lg" />
                <button
                    onClick={() => downloadTxtFile(CreateVCard())}
                    className="text-white rounded-2xl min-w-[64px] min-h-[64px] translate-y-0 focus:outline-none duration-500 hover:text-altSecond active:translate-y-0.5 active:scale-95 gap-x-2 transition-all text-center items-center bg-bgSecondary">
                    <BsFillPersonPlusFill className="mx-auto text-[30px] translate-x-0.5 " />
                </button>
            </section>
            <p className="text-white">Download Contact</p>
        </div>
    );
};

export default ContactDownloadButton;

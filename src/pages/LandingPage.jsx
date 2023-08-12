import CardBody from "../components/CardBody";
import ContactDownloadButton from "../components/ContactDownloadButton";

const LandingPage = () => {
    return (
        <main className="h-full w-full relative items-center mx-auto flex-col justify-center flex">
            <CardBody />
            <section className="relative h-[40%] flex flex-col justify-center mx-auto ">
                <ContactDownloadButton />
            </section>
        </main>
    );
};

export default LandingPage;

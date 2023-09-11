import CardBody from '../components/CardBody';
import ContactDownloadButton from '../components/ContactDownloadButton';

const LandingPage = () => {
    return (
        <main className="relative mx-auto flex h-full w-full flex-col items-center justify-center">
            <CardBody />
            <section className="relative mx-auto flex h-[40%] flex-col justify-center ">
                <ContactDownloadButton />
            </section>
        </main>
    );
};

export default LandingPage;

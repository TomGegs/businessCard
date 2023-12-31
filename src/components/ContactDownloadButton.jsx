import { BsFillPersonPlusFill } from 'react-icons/bs';
import { useState } from 'react';
import { contactDetails } from '../utils/ContactDetails';
import DialogBox from './ui/DialogBox';

function ContactDownloadButton() {
    const [isOpen, setIsOpen] = useState(false);

    const closeBox = () => {
        setIsOpen(false);
    };

    const openBox = () => {
        setIsOpen(true);
    };

    const handleClick = () => {
        contactDetails().downloadTxtFile(contactDetails().createVCard());
        openBox();
    };

    return (
        <div className="flex h-[40%] flex-col gap-y-6">
            <section className="relative mx-auto flex w-fit flex-col justify-center ">
                <div className=" absolute h-16 min-w-[65px] animate-gradient bg-gradient-to-r from-primary via-altSecond to-secondary blur-lg" />
                <button
                    type="button"
                    onClick={handleClick}
                    className="min-h-[64px] min-w-[64px] translate-y-0 items-center gap-x-2 rounded-2xl bg-bgSecondary text-center text-white transition-all duration-500 hover:text-altSecond focus:outline-none active:translate-y-0.5 active:scale-95"
                >
                    <BsFillPersonPlusFill className="mx-auto translate-x-0.5 text-[30px] " />
                </button>
                <DialogBox closeBox={closeBox} isOpen={isOpen} />
            </section>
            <p className="text-white">Download Contact</p>
        </div>
    );
}

export default ContactDownloadButton;

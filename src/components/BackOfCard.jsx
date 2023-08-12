import { AiOutlineDoubleLeft } from "react-icons/ai";
import IconButtons from "./buttons/IconButtons";

const BackOfCard = ({ onFlipBack }) => {
    return (
        <div className="h-full ">
            <IconButtons
                noNewTab={true}
                iconName={
                    <AiOutlineDoubleLeft
                        className="animate-pulse"
                        onClick={onFlipBack}
                    />
                }
            />
            <div className="flex justify-center align-middle object-center items-center h-full ">
                <p>Very cheeky to look at my butt</p>
            </div>
        </div>
    );
};

export default BackOfCard;

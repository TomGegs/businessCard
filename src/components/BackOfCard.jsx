import { AiOutlineDoubleLeft } from 'react-icons/ai';
import IconButtons from './buttons/IconButtons';

function BackOfCard({ onFlipBack }) {
    return (
        <div className="h-full ">
            <IconButtons
                noNewTab
                iconName={
                    <AiOutlineDoubleLeft
                        className="animate-pulse"
                        onClick={onFlipBack}
                    />
                }
            />
            <div className="flex h-full items-center justify-center object-center align-middle ">
                <p>Very cheeky to look back here</p>
            </div>
        </div>
    );
}

export default BackOfCard;

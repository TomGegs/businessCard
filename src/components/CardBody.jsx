import { useState, useEffect, useRef } from 'react';

import BackOfCard from './BackOfCard';
import FrontOfCard from './FrontOfCard';

function CardBody() {
    const [rotateStyles, setRotateStyles] = useState({
        rotateX: 0,
        rotateY: 0,
    });

    const [flip, setFlip] = useState(false);

    const [cardHeight, setCardHeight] = useState('initial');

    // Location tracking
    // Function to update rotation styles based on mouse position or finger movement
    const rotateElement = (event) => {
        const clientX = event.touches
            ? event.touches[0].clientX
            : event.clientX;
        const clientY = event.touches
            ? event.touches[0].clientY
            : event.clientY;

        // Calculate the middle of the screen
        const middleX = window.innerWidth / 2;
        const middleY = window.innerHeight / 2;

        // Calculate the offset of the mouse pointer/finger from the middle of the screen
        const offsetX = ((clientX - middleX) / middleX) * 20;
        const offsetY = ((clientY - middleY) / middleY) * 20;

        // Update the state with new rotation values
        setRotateStyles({
            rotateX: offsetX,
            rotateY: -offsetY,
        });
    };

    // Add and remove the event listener
    useEffect(() => {
        const eventHandler =
            'ontouchstart' in window ? 'touchmove' : 'mousemove';

        document.addEventListener(eventHandler, rotateElement);

        return () => {
            document.removeEventListener(eventHandler, rotateElement);
        };
    }, []); // Empty array so effect runs only on mount

    // Create a style object with the rotation values
    const rotateStyle = {
        '--rotateX': `${rotateStyles.rotateX}deg`,
        '--rotateY': `${rotateStyles.rotateY}deg`,
    };

    const clickFlip = {
        '--rotateX': `180deg`,
        '--rotateY': `0deg`,
        transition: 'transform 1s',
    };

    const flipStyle = () => {
        if (flip) {
            return clickFlip;
        }
        return rotateStyle;
    };

    // Front size of card height adjusts to content and window size and resizes middle and back of card

    const frontSide = useRef();

    const setHeight = () => {
        const frontHeight = frontSide.current.getBoundingClientRect().height;
        setCardHeight(Math.max(frontHeight, 200));
    };

    useEffect(setHeight, [frontSide]);
    useEffect(() => {
        window.addEventListener('resize', setHeight);
        return () => window.removeEventListener('resize', setHeight);
    }, []);

    return (
        // wrapper
        <div
            role="button"
            tabIndex="0"
            style={{ ...flipStyle(), height: cardHeight }}
            className={`card font-Unbounded ${flip ? 'flip' : ''}`}
        >
            {/* Front of card */}
            <section className="front" ref={frontSide}>
                <FrontOfCard flipCard={() => setFlip(!flip)} />
            </section>
            {/* holo middle panel */}
            <section className="middle" />
            {/* Back of card */}
            <section className="back" style={{ height: cardHeight }}>
                <BackOfCard onFlipBack={() => setFlip(!flip)} />
            </section>
        </div>
    );
}

export default CardBody;

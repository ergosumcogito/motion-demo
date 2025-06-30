import { motion } from "motion/react";
import { useState } from "react";

function TiltImage({ src, alt, style}) {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const maxTilt = 30;

    const handleMouseMove = (e) => {
        const bounds = e.currentTarget.getBoundingClientRect();

        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;

        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        const normX = deltaX / (bounds.width / 2);
        const normY = deltaY / (bounds.height / 2);

       const rotateX = -normY * maxTilt;
       const rotateY = normX * maxTilt;

        setRotate({
            x: rotateX,
            y: rotateY
        });
    };

    const reset = () => setRotate({ x: 0, y: 0 });

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            style={{
                perspective: 1000, // perspective is now on the parent
                display: 'inline-block',
            }}
        >
            <motion.img
                src={src}
                alt={alt}
                style={{
                    transformStyle: 'preserve-3d',
                    ...style,
                }}
                animate={{
                    rotateX: rotate.x,
                    rotateY: rotate.y,
                    transition: { type: 'spring', stiffness: 200, damping: 14 },
                }}
            />
        </div>
    );
}

export default TiltImage;
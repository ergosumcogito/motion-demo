import { motion } from 'motion/react'

function PageWrapper({children, enabled = true}) {

    // No animations
    if (!enabled) {
        return <div>{children}</div>;
    }

    // With animations
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: -40,
                filter: 'blur(4px)',
            }}
            animate={{
                opacity: 1,
                x: 0,
                filter: 'blur(0px)',
            }}
            exit={{
                opacity: 0,
                x: 60,
                filter: 'blur(4px)',
            }}
            transition={{
                duration: 0.3,
                ease: [0.33, 1, 0.68, 1]
            }}
        >
            {children}
        </motion.div>
    );
}

export default PageWrapper;
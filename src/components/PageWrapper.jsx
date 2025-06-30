import { motion } from 'motion/react'

function PageWrapper({children, enabled = true}) {

    // No animations
    if (!enabled) {
        return <div>{children}</div>;
    }

    // With animations
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.27 }}
        >
            {children}
        </motion.div>
    );
}

export default PageWrapper;
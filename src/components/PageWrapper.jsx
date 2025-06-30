import { motion } from 'motion/react'

function PageWrapper({children, enabled = true}) {

    // No animations
    if (!enabled) {
        return <div>{children}</div>;
    }

    // With animations
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
        >
            {children}
        </motion.div>
    );
}

export default PageWrapper;
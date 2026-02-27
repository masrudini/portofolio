import { motion } from "framer-motion";

const FloatingIcons = (props) => {
    const icon = props.icon;
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {icon.map(({ Icon, top, left }, index) => (
            <motion.div
            key={index}
            className="absolute text-blue-500/10 dark:text-blue-400/10"
            style={{ top, left }}
            animate={{ y: [0, -20, 0] }}
            transition={{
                duration: 6 + index,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            >
            <Icon size={60} />
            </motion.div>
        ))}
        </div>
    );
}

export default FloatingIcons
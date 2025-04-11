import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NameDrawing from "./NameDrawing.js"; // Your animated name component

export default function SplashScreen() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 2800); // time before it fades out

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {showSplash && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-white z-50"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .5 }}
                >
                    <NameDrawing />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

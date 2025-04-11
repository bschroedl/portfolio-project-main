import { motion } from 'framer-motion';
import NameDrawing from "./NameDrawing.js";
import {useState} from "react";

const NameDrawingDiv = () => {
    const [showText, setShowText] = useState(false);

    return (
        <>
            <motion.div
                // initial={{ y: 0 }}                           // Starts at original position
                // animate={{ y: '-20%' }}                      // Slides up 25% of its height
                // transition={{ delay: 2.2, duration: 0.8, ease: 'easeOut' }}
                onAnimationComplete={() => setShowText(true)}
                // style={{
                //     position: 'relative', // important if you want to keep layout stable
                //     overflow: 'visible',  // avoid clipping
                //     willChange: 'transform', // hint to browser
                //     padding: '200px',
                //     borderRadius: '10px',
                //     textAlign: 'center',
                //     margin: '50px auto',
                //     width: '100vw',
                //     background: "none",
                // }}
            >
                <NameDrawing />
            </motion.div>

            {showText && (
                <motion.div
                    initial={{ opacity: 0 }}           // Starts with invisible text
                    animate={{ opacity: 1 }}           // Fades to full opacity
                    transition={{ duration: .4 }}      // Duration for the fade-in effect
                >
                    {/*absolute top-3/8 left-2/10 text-2xl font-['Lexend']*/}
                    {/*<h1 className="absolute top-1/10 left-1/2 transform -translate-x-1/2 text-2xl font-['Inter']">*/}
                    <h1>
                        Coming Soon
                    </h1>
                </motion.div>
            )}
        </>

    );
};

export default NameDrawingDiv;

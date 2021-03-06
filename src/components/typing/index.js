import React from 'react'
import {motion} from "framer-motion";

const Typing = ({even}) => {
    return (
        <motion.div
            className={`typing ${even ? 'is-right' : 'is-left'}`}
            initial={{rotate: 10, scale: 0}}
            animate={{rotate: 0, scale: 1}}
        >
            <div className="dots">
                <div/>
                <div/>
                <div/>
            </div>
        </motion.div>
    );
}

export default Typing
import React from 'react'
import {motion} from "framer-motion";

const Message = ({message}) => {
    return (
        <motion.div
            className="message"
            initial={{rotate: -5, scale: 0}}
            animate={{rotate: 0, scale: 1}}
        >
            <div className="avatar">😎</div>
            <div className="text">{message.text}</div>
            <div className="avatar">🤠</div>
        </motion.div>
    );
}

export default Message
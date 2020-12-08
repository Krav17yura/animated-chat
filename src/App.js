import React, {useState} from 'react';
import Message from "./components/message";
import Typing from "./components/typing";
import useInterval from '@use-it/interval';
import './App.css';
import messages from './services'


const App = () => {
    const [messageToShow, setMessageToShow] = useState(0);


    useInterval(() => {
        setMessageToShow((messageToShow) => messageToShow + 1);
    }, 2000);

    return (
        <div className="app">
            <div className="walkthrough">
                {messages.map((message, index) => {
                    const even = index % 2 === 0;
                    if (messageToShow + 1 === index) {
                        return <Typing key={index} even={even}/>;
                    }
                    if (index > messageToShow) return <div key={index}/>;
                    return <Message key={index} message={message}/>;
                })}
            </div>
        </div>
    );
}

export default App
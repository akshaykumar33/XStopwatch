/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';

function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalRef = useRef(null);

    const handleStartStop = () => {
        if (isRunning) {
            clearInterval(intervalRef.current);
        } else {
            const startTime = Date.now() - elapsedTime;
            intervalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTime);
            }, 10);
        }
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setElapsedTime(0);
    };

    const formatTime = (time) => {
        const seconds = Math.floor((time % (1000 * 60)) / 1000);
        const milliseconds = Math.floor((time % 1000) / 10);

        return `${seconds.toString().padStart(1, '0')}:${milliseconds.toString().padStart(2, '0')}`;
    };

    return (
        <div>
            <h1>Stopwatch</h1>
            <div>Time:{formatTime(elapsedTime)}</div>
            <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Stopwatch;

import { useState, useEffect } from "react";

let TimeApp = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="app-name">
            <h3>
                This is the Current Time: {time.toLocaleTimeString()} -{" "}
                {time.toLocaleDateString("en-GB")}
            </h3>
        </div>
    );
};

export default TimeApp;
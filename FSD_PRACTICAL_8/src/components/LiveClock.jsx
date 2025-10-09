import { useEffect, useState } from "react"


const LiveClock = () => {
    const [datetime, setDateTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date())
        }, 1000)

        return clearInterval(timer);
    }, []);

    return(
        <div>
            <h1>Live Clock</h1>
            <h2>{datetime.toLocaleString()}</h2>
        </div>
    )
}

export default LiveClock
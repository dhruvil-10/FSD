import { useState } from "react"


const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false)

    return(
        <div>
            <h1>Toggle Button</h1>
            <button onClick={()=> setIsOn(!isOn)}>{isOn ? "ON": "OFF"}</button>
        </div>
    )
}

export default ToggleButton
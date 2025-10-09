import { useState } from "react"

const Child = ({message}) => {
    return(
        <div>
            <h1>{message}</h1>
        </div>
    )
}

const ParentChildProps = () => {
    const[msg, setMsg] = useState('')

    return(
        <div>
            <h1>Parent-Child Props Communication</h1>
            <button onClick={() => setMsg("Hello Nisarg!!! How are you?")}>Send Message to Child</button>
            <Child message={msg}/>
        </div>
    )
}

export default ParentChildProps
import { useState } from "react";
import './HookComponent.css';

const HookComponent = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState({firstName: '', lastName: '' });
    const incrementFive = () => {
        for(let i=0; i<5; i++)
            setCount(prevCount=> prevCount+1)
    }
    return (
        <div>
            <h1>Count - {count}</h1>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={incrementFive}>Increment-5</button>
            <br />
            <br />
            First Name: <input value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}></input>
            <br />
            <br />
            Last Name: <input value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}></input>
            <h3>First Name: {name.firstName}</h3>
            <h3>Last Name: {name.lastName}</h3>
        </div>
    )
}

export default HookComponent
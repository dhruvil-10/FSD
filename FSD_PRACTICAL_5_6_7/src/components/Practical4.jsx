import { useState } from "react"
import './Practical4.css'
import StudentInfo from "./StudentInfo"

const Practical4 = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState({firstName: '', lastName: ''});
    const increment5 = () => {
        for(let i=1; i<=5; i++)
            setCount(prevCount=> prevCount+1)
    }
    return(
        <div className="practical4-container">
            <StudentInfo />
            <div className="practical-title">
                <h1>Practical 4 - Counter & Forms</h1>
                <p>Interactive counter with form input handling and state management</p>
            </div>
            <div className="content-wrapper">
                <div className="counter-section">
                    <h2>🔢 Counter App</h2>
                    <div className="counter-display">
                        <span className="count-number">{count}</span>
                    </div>
                    <div className="button-group">
                        <button className="counter-btn increment" onClick={() => setCount(count+1)}>
                            ➕ Increment
                        </button>
                        <button className="counter-btn decrement" onClick={() => setCount(count-1)}>
                            ➖ Decrement
                        </button>
                        <button className="counter-btn reset" onClick={() => setCount(0)}>
                            🔄 Reset
                        </button>
                        <button className="counter-btn increment-5" onClick={() => increment5()}>
                            ⚡ +5
                        </button>
                    </div>
                </div>

                <div className="form-section">
                    <h2>📝 Name Form</h2>
                    <div className="input-group">
                        <label>First Name:</label>
                        <input 
                            type="text" 
                            value={name.firstName} 
                            onChange={e => setName({...name, firstName: e.target.value})}
                            placeholder="Enter first name"
                            className="name-input"
                        />
                    </div>
                    <div className="input-group">
                        <label>Last Name:</label>
                        <input 
                            type="text" 
                            value={name.lastName} 
                            onChange={e => setName({...name, lastName: e.target.value})}
                            placeholder="Enter last name"
                            className="name-input"
                        />
                    </div>
                    <div className="name-display">
                        <div className="name-result">
                            <strong>👤 Full Name:</strong> {name.firstName} {name.lastName}
                        </div>
                        <div className="name-details">
                            <span>First: {name.firstName || 'Not set'}</span>
                            <span>Last: {name.lastName || 'Not set'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Practical4
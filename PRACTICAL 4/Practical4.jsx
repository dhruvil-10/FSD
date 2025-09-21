import { useState } from "react"
import './PRACTICAL4.css'

const Practical4 = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState({firstName: '', lastName: ''});
    const [isAnimating, setIsAnimating] = useState(false);

    const increment5 = () => {
        setIsAnimating(true);
        for(let i=1; i<=5; i++)
            setCount(prevCount=> prevCount+1)
        setTimeout(() => setIsAnimating(false), 300);
    }

    const handleIncrement = () => {
        setIsAnimating(true);
        setCount(count+1);
        setTimeout(() => setIsAnimating(false), 300);
    }

    const handleDecrement = () => {
        setIsAnimating(true);
        setCount(count-1);
        setTimeout(() => setIsAnimating(false), 300);
    }

    const handleReset = () => {
        setIsAnimating(true);
        setCount(0);
        setTimeout(() => setIsAnimating(false), 300);
    }

    return(
        <div className="app-container">
            <div className="background-pattern"></div>
            
            <div className="content-wrapper">
                <div className="header-section">
                    <h1 className="main-title">React Hooks Demo</h1>
                    <p className="subtitle">Interactive Counter & State Management</p>
                </div>

                <div className="counter-section">
                    <div className="counter-card">
                        <h2 className="counter-label">Counter Value</h2>
                        <div className={`counter-display ${isAnimating ? 'animating' : ''}`}>
                            <span className="counter-number">{count}</span>
                        </div>
                        
                        <div className="button-grid">
                            <button 
                                className="action-btn increment-btn" 
                                onClick={handleIncrement}
                            >
                                <span className="btn-icon">+</span>
                                <span className="btn-text">Increment</span>
                            </button>
                            
                            <button 
                                className="action-btn decrement-btn" 
                                onClick={handleDecrement}
                            >
                                <span className="btn-icon">−</span>
                                <span className="btn-text">Decrement</span>
                            </button>
                            
                            <button 
                                className="action-btn reset-btn" 
                                onClick={handleReset}
                            >
                                <span className="btn-icon">↻</span>
                                <span className="btn-text">Reset</span>
                            </button>
                            
                            <button 
                                className="action-btn increment5-btn" 
                                onClick={increment5}
                            >
                                <span className="btn-icon">+5</span>
                                <span className="btn-text">Add Five</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="form-section">
                    <div className="form-card">
                        <h2 className="form-title">Name Input Form</h2>
                        <p className="form-description">Enter your details below</p>
                        
                        <div className="input-group">
                            <div className="input-wrapper">
                                <label className="input-label">First Name</label>
                                <input 
                                    type="text" 
                                    className="styled-input"
                                    value={name.firstName} 
                                    onChange={e => setName({...name, firstName: e.target.value})}
                                    placeholder="Enter your first name"
                                />
                            </div>
                            
                            <div className="input-wrapper">
                                <label className="input-label">Last Name</label>
                                <input 
                                    type="text" 
                                    className="styled-input"
                                    value={name.lastName} 
                                    onChange={e => setName({...name, lastName: e.target.value})}
                                    placeholder="Enter your last name"
                                />
                            </div>
                        </div>

                        {(name.firstName || name.lastName) && (
                            <div className="result-display">
                                <h3 className="result-title">Live Preview</h3>
                                <div className="name-display">
                                    <div className="name-item">
                                        <span className="name-label">First Name:</span>
                                        <span className="name-value">{name.firstName || 'Not entered'}</span>
                                    </div>
                                    <div className="name-item">
                                        <span className="name-label">Last Name:</span>
                                        <span className="name-value">{name.lastName || 'Not entered'}</span>
                                    </div>
                                    {name.firstName && name.lastName && (
                                        <div className="full-name">
                                            <span className="full-name-label">Full Name:</span>
                                            <span className="full-name-value">{name.firstName} {name.lastName}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Practical4
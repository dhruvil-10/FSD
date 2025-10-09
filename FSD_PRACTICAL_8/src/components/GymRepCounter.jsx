import { useEffect, useState } from "react"


const GymRepCounter = () => {
    const[count, setCount] = useState(0);

    useEffect(() => {
        const savedCount = localStorage.getItem("gymrep");
        if(savedCount){
            setCount(Number(savedCount))
        }
    }, []);

    useEffect(()=> {
        localStorage.setItem("gymrep", count);
    }, [count]);

    return(
        <div style={{
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1))',
            borderRadius: '20px',
            padding: '2rem',
            border: '2px solid rgba(255, 255, 255, 0.2)'
        }}>
            <h2 style={{color: '#fff', marginBottom: '1.5rem', fontSize: '2rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>💪 Gym Rep Counter</h2>
            <div style={{
                background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.3), rgba(78, 205, 196, 0.3))',
                borderRadius: '20px',
                padding: '2rem',
                margin: '1.5rem 0',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
            }}>
                <h3 style={{color: '#fff', fontSize: '3rem', margin: '0.5rem 0', textShadow: '0 3px 6px rgba(0,0,0,0.4)'}}>🔥 {count}</h3>
                <p style={{color: 'rgba(255, 255, 255, 0.9)', margin: '0.5rem 0', fontSize: '1.1rem'}}>Total Reps</p>
            </div>
            <div style={{
                display: 'flex', 
                justifyContent: 'center', 
                gap: '1rem', 
                flexWrap: 'wrap',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                padding: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
                <button onClick={()=> setCount(count+1)}>➕ Add Rep</button>
                <button onClick={()=> setCount(count-1)} disabled={count <= 0}>➖ Remove</button>
                <button onClick={()=> setCount(0)} style={{background: 'linear-gradient(45deg, #4ecdc4, #44a08d)'}}>🔄 Reset</button>
            </div>
        </div>
    )
}

export default GymRepCounter
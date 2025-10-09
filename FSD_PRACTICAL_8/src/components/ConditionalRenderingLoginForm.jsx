import {  useState } from "react"


const ConditionalRenderingLoginForm = () => {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[isLogIn, setIsLogIn] = useState(null)

    const handleLogin = () => {
        if(username === "admin" && password ==="123"){
            setIsLogIn(true)
        }else{
            setIsLogIn(false)
        }
    }

    return(
        <div>
            <h1>Login Form</h1>
            Username: <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
            Password: <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={()=> handleLogin()}>Login</button>

            {isLogIn === true && <h3>Welcome Admin</h3>}
            {isLogIn === false && <h3>Login Failed!!!</h3>}
        </div>
    )
}

export default ConditionalRenderingLoginForm
import { useState } from "react"


const FormHandling = () => {
    const[fName, setFName] = useState('')
    const[lName, setLName] = useState('')

    return(
        <div>
            <h1>Form Handling</h1>
            First Name: <input type="text" value={fName} onChange={e=> setFName(e.target.value)}/>
            <br />
            Last Name: <input type="text" value={lName} onChange={e=> setLName(e.target.value)}/>
            <br />
            First Name: <h2>{fName}</h2>
            Last Name: <h2>{lName}</h2>
        </div>
    )
}

export default FormHandling
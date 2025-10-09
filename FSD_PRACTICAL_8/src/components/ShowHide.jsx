import { useState } from "react"


const ShowHide = () => {
    const[isShow, setIsShow] = useState(false);

    return(
        <div>
            <button onClick={() => setIsShow(!isShow)}>{isShow ? "Hide" : "Show"}</button>
            {isShow && (
                <p>Hello Nisarg How are You???</p>
            )}
        </div>
    )
}

export default ShowHide
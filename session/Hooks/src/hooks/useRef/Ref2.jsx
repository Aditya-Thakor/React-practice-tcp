import { useRef } from "react"

export default function Ref2() {
    const inputRef=useRef(null);

    const handleFocus=()=>{
        inputRef.current.focus();
    }
    return(
        <div>
            <input 
                type="text"
                name="text" 
                id="txt"
                ref={inputRef} 
            />
            <button onClick={handleFocus}>Focus</button>
        </div>
    )
}
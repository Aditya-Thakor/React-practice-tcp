/*
useRef is used to: - Access DOM elements directly - Store a mutable value that does NOT cause
re-render
Value persists between renders.

Syntax::
        const ref = useRef(initialValue);
*/ 
 
import { useRef } from "react"

export default function Ref() {
    
    const count=useRef(0);
    const increase =()=>{
        count.current += 1
        console.log(count.current); 
    }
    return <button onClick={increase}>Increase</button>
}
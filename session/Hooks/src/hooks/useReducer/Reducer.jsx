import { useReducer } from "react"

const initialState = {count:0,demo:10}

function reducer (state,action){
    
    switch (action.type) {
        case "increment":
            
            return{count:state.count+1,demo:state.demo-1} 

        case "decrement":
            return{count:state.count-1,demo:state.demo+1} 
    
        default:
            return state;
    }
    
} 

export default function Reducer() {

    const [state,setState]=useReducer(reducer,initialState);

    return(
        <div>
            <p>Count:{state.count}</p>
            <p>Count:{state.demo}</p>
            <button onClick={()=>setState({type:"increment"})} >+</button>
            <button onClick={()=>setState({type:"decrement"})} >-</button> 
        </div>
    )
}
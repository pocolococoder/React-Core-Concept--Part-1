import { useState } from "react"

export default function Counter(){

    const [count,setCount] = useState(0);

    const handleCount = ()=>{
        let newCount = count +1;
        setCount(newCount);
    }

    const handleDecrease=()=>{
        if(count>0){
            setCount(count-1);
        }
        else{
            alert("Can't be negative!")
        }
    }
    
    const counterStyle = {
        border: "2px solid yellow",
        borderRadius: "20px",
        padding: "10px"
    }
    return(
        <div style={counterStyle}>
            <h3>Count: {count} </h3>
            <button onClick={handleCount}>Count</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    )
}
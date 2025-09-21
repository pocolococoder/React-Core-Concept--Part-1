import { useState } from "react"


export default function Bowler(){

 let [bowls,setbowls]= useState(6);
 let [runs,setRuns] = useState(0);
 let [isNoBall]= useState('true');
 let [noBalls,setNoBalls]= useState(0);
 


 const handleBowls=()=>{
    if(bowls>0){
        let increaseBowl = bowls-1;
    setbowls(increaseBowl);
    }
    }

    const noBall = ()=>{
        if(bowls>0){
            let updateRuns = runs + 4;
            let noBallsUpdate = noBalls+1;
            setNoBalls(noBallsUpdate);
        setRuns(updateRuns)
        }
        }



    const counterStyle = {
        border: "2px solid yellow",
        borderRadius: "20px",
        padding: "10px"
    }
    return(
        <div style={counterStyle}>
            <h1>Bowl: {bowls} </h1>
            <h2>Bowler: Saqlain</h2>
            <h4>Runs : {runs}</h4>
            {
                isNoBall ? <p>No Ball : {noBalls}</p> : <p></p>
            }
            <button onClick={handleBowls}>Bowl Button</button>
            <button onClick={noBall}>NoBall</button>
            
        </div>
    )
}
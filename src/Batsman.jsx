import { useState } from "react"

export default function Batsman(){

    let [runs,setRuns] = useState(0);
    let [singles,setSingles] = useState(0);
    let [fours,setFours]= useState(0);
    let [sixes,SetSixes]=useState(0);

    const singleRuns=()=>{
        let updateRuns = runs+1;
        let updateSingles = singles+1;
        setSingles(updateSingles);
        setRuns(updateRuns);
    }

    const fourRuns=()=>{
        let updateRuns = runs+4;
        let updateFours = fours+1;
        setFours(updateFours);
        setRuns(updateRuns);
    }

    const sixRuns=()=>{
        let updateRuns = runs+6;
        const updatedSixes = sixes +1;
        SetSixes(updatedSixes);
        setRuns(updateRuns);
    }

    const counterStyle = {
        border: "2px solid yellow",
        borderRadius: "20px",
        padding: "10px"
    }
    return(


        <div style={counterStyle}>
            <h2>Runs : Liton Das</h2>
            <h1>Score: {runs}</h1>
            {
                runs>50 && <p>You hit 50! Congrats.</p>
            }
            {
                runs>100 ? <p>You hit 100! Century!</p> : <p></p>
            }
            <h3>Singles : {singles}</h3>
            <h3>Fours : {fours}</h3>
            <h3>Sixes : {sixes}</h3>
           
            <button onClick={singleRuns}>Singles</button>
            <button onClick={fourRuns}>Four</button>
            <button onClick={sixRuns}>Six</button>
        </div>
    )
}
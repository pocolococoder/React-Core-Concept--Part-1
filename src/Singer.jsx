import './App.css'
export default function Singer({singer}){
    return (
        <div className='singer'>
            <h2>Singer: {singer.name} </h2>
            <h4>Age: {singer.age}</h4>
        </div>
    )
    
}
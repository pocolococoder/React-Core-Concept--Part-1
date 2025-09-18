import './App.css'

export default function Singer({name,age}){
    return(
       <div className='singer'>
        <h3>Name : {name}</h3>
        <p>age: {age}</p>
       </div>
    )
}
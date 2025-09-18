
import './App.css'
import ToDo from './ToDo.jsx'
import Actor from '/Actor.jsx'
import Singer from './Singer.jsx'
import Library from './Library.jsx'

function App() {

  const actors = ["shahrukh","salman","Aamir","Ranbir"];

  const singers = [
    {
      id:1, name: 'Dr.Mahfuz', age:68},
      {id:2 , name:'Tahsan', age: 45},
      {id:3, name: 'Bappy', age: 29}
  ];

    const books = [
      {id:1, name:'physics',price:250},
      {id:2, name:'chem',price:290},
      {id:3, name:'ban',price:270},
      {id:4, name:'eng',price:230}
    ]




  const time = 50;
  return (
    <>

      <h1>React Core Concepts</h1>
      <Library books={books}></Library>

      {
        actors.map(actor=><Actor actor={actor}></Actor>)
      }

      {
        singers.map(singer=><Singer key={singer.id} name={singer.name} age={singer.age}></Singer>)
      }


      {/* <ToDo task="Learn React" isDone={true} duration={time}></ToDo>
      <ToDo task="Revise JS" isDone={true} duration={time}></ToDo>
      <ToDo task="Take Shower" isDone={false}></ToDo> */}


      {/* <Student></Student>
      <Person></Person>
      <Developer name="Mozumder" tech="JS" mobile="Iphone"></Developer>
      <Developer name="Rajon" tech="Python" mobile="HTC"></Developer>
      <Developer name="Shabana" tech="Java" mobile="Huwaei"></Developer>
      <Elements monitor="Walton" keyboard="A4Tech"></Elements>
      <Player name="Tamim" runs="5000"></Player>
      <Salami event="Eid Ul Fit'r" tk="4000"></Salami> */}
     
    </>
  )
}


// function Salami({event,tk}){
//   return(
//     <div className='student'>
//       <h2>Salami For Eid : {event} </h2>
//       <p>Amount : {tk} </p>
//     </div>
//   )
// }

//   function Player({name,runs}){
//     return(
//       <div className='student'>
//         <h2>Name: {name} </h2>
//         <p>Runs: {runs} </p>
//       </div>
//     )
//   }

//   function Developer(props){
//     // console.log(props)
//     return(
//       <div style={{
//         border: "2px solid green",
//         borderRadius: "20px",
//         margin : "10px"
        
//       }}>
//         <h3>Developer : {props.name}</h3>
//         <p>Technology : {props.tech}</p>
//         <p>Mobile Used : {props.mobile}</p>
//       </div>
//     )
//   }

//   function Elements(props){
//     // console.log(props)
//     return(
//       <div style={{
//         border: "3px solid purple",
//         borderRadius : "20px",
//         padding : "10px",
//         margin : "10px"
//       }}>
//         <h2>Monitor : {props.monitor}</h2>
//         <p> Keyborad : {props.keyboard}</p>
//       </div>
//     )
//   }

//   function Student(){
//       return(
//         <div className='student'>
//           <p>Name: Rezwan</p>
//           <p>Dept: CSE</p>
//         </div>
//       )
//     }



// function Person() {
//   const age = 17;
//   const name = "Jolil";
//   const personStyle = {
//     color: "red",
//     fontSize: "25px",
//     textAlign: "left",

//   }
//   return (
//     <p style={personStyle}>My Name is {name} and age is {age}</p>
//   )
// }

// function Animal(){
//   const pet = "Persian-Cat"
//   return(
//     <p> My Pet is {pet}</p>
//   )
// }

// function Sports(){
//   return(
//     <div>
//       <h3>Cricket</h3>
//       <ul>
//         <li>Kola</li>
//         <li>Komola</li>
//       </ul>
//       <p>Playing and Loosing</p>
//     </div>
//   )
// }
export default App

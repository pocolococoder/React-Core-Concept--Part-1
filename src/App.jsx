
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import Library from './Library'
import Counter from './Counter'
import Batsman from './Batsman'
import Bowler from './Bowler'



function App() {


  //  const books = [
  //   {id: 1, name: 'Physics', price: 350},
  //   {id: 2, name: 'Chemistry', price: 250},
  //   {id: 3, name: 'Bangla', price: 150},
  //   {id: 4, name: 'English', price: 650},
  //  ]

  // const actors = ['Nivin',"Fahadh","Dulquer","Tovino"]

  // const singers = [
  //   {id: 1, name:'Tahsan', age: 68},
  //   {id: 2, name:'Atif', age: 48},
  //   {id: 2, name:'Hridoy', age: 98}
  // ]

  // const time = 50;

  // function handleClick(){
  //   alert("clicked - 1")
  // }

  // const  handleClick3 = ()=>{
  //   alert('Click-3')
  // } 

  // const handleClick5 = (num)=>{
  //   let newNum = num+10;
  //   alert(newNum);
  // }


 return(
    <>

      <h1>React Core Concepts</h1>
      <Bowler></Bowler>
      {/* <Batsman></Batsman> */}

      {/* <Counter></Counter> */}

      {/* <button onClick={handleClick}>Click-1</button>

      <button onClick={function handleClick2(){
        alert('Click-2');
      }}>Click-2</button>

      <button onClick={handleClick3}>Click-3</button>

      <button onClick={()=>{
        alert('Click-4');
      }}>Click-4</button>

      <button onClick={()=>{handleClick5(5)}}>Click-5</button> */}






      {/* <Library books={books}></Library> */}



      {/* {
        actors.map(actor=><Actor actor={actor}></Actor>)
      } */}

      {/* {
        singers.map(singer=><Singer key={singer.id} singer={singer}></Singer>)
      } */}





      {/* <Todo task="Learn-react"
       isDone={true}
        time={time}></Todo>

      <Todo task="Revise JS"
       isDone={false}>
      </Todo>

    <Todo task="Revise ES-6"
       isDone={true}
       >

        </Todo> */}




      {/* <Developer name="Rezwan" tech="js"></Developer>
      <Developer name="Sifat" tech='python'></Developer>
      <Developer name="Shoron" tech='java'></Developer> */}

      {/* <Developer name="Rezwan" tech="JS" device="Android" exp="2.5 Months"></Developer>
      
      <Developer name="Sifat" tech="Python" device="Apple" exp="2.6 Months"></Developer>
      
      <Developer name="Shoron" tech="Java" device="Android" exp="2.9 Months"></Developer>
      
      <Developer name="Labon" tech="C++" device="Android" exp="5 Months"></Developer>
      
      <Player name="Tamim" runs="8000"></Player>
      <Player name="De Viliers" runs="9000"></Player>
      <Player name="Salman" runs="7000"></Player>
      <Salami name="Rufaida" amount="5000"></Salami>
      <Salami name="Rumaisa" amount="4000"></Salami>
      <Salami name="Moyna" amount="10000"></Salami>
      <Cinema name="3 Idiots" watchall="400"></Cinema>
      <Cinema name="Three of Us" watchall="300"></Cinema>
      <Cinema name="Ratsasan" watchall="200"></Cinema>
      <Cinema name="1917" watchall="900"></Cinema> */}
    </>
  )
}

// function Developer(props){
//   console.log(props);
//   return(
//     <div style={{
//       border: "2px solid green",
//       borderRadius: '20px'
//     }}>
//       <h3>Developer: {props["name"]}</h3>
//       <h4>Technology: {props.tech}</h4>
//     </div>
//   )
// }

// function Developer(objects){
//   console.log(objects);
//   return(
//     <>
//     <div style={{
//       border: "2px solid yellow",
//       margin: "15px",
//       padding: "10px",
//       borderRadius: "10px"
//     }}>
//       <h2>Developer: {objects.name} </h2>
//       <h3>Technology: {objects.tech} </h3>
//       <h3>Device: {objects["device"]} </h3>
//       <h3>Experience: {objects.exp} </h3>
//     </div>
//     </>
//   )
// }


// function Player({name,runs}){
//   return(
//     <div style={{
//       border: "2px solid orange",
//       margin: "15px",
//       padding: "10px",
//       borderRadius: "10px"
//     }}>
//       <h3>Names: {name} </h3>
//       <h4>Runs: {runs} </h4>
//     </div>
//   )
// }


// function Salami({name,amount}){
//   return(
//     <div style={{
//       border: "2px solid red",
//       margin: "15px",
//       padding: "10px",
//       borderRadius: "10px"
//     }}>
//       <h3>Salami For: {name} </h3>
//       <h4>Amount: {amount} </h4>
//     </div>
//   )
// }

// function Cinema({name,watchall}){
//   return(
//     <div style={{
//       border: "2px solid lightblue",
//       margin: "15px",
//       padding: "10px",
//       borderRadius: "10px"
//     }}>
//       <h3>Latest Cinema: {name} </h3>
//       <h4>Watched: {watchall} </h4>
//     </div>
//   )
// }


export default App

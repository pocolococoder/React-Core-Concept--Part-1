// export default function ToDo({task,isDone}){
//     return(
//         <div>
//             <h3>Task : {task}</h3>
//         </div>
        
//     )
// }


// export default function ToDo({task,isDone,duration}){
//     if(isDone===true){
//         return(
//             <div>
//              <h3>Done : {task} Duration: {duration}</h3>
//         </div>
//         )
//     }
//     else{
//         return (
//             <li>Pending: {task}</li>
//         )
//     }
// }



    //conditional rendering: 3 ternary

    // export default function ToDo({task,isDone,duration}){
    //     return isDone ? <li>Done : {task} time: {duration}</li> : <li>Not Done : {task}</li>
    // }


    //conditional rendering 

    //  export default function ToDo({task,isDone,duration}){
    //     return isDone && <li>Done : {task} Time : {duration}</li>
    // }


    //  export default function ToDo({task,isDone,duration}){
    //     return isDone && <li> Done : {task} Time : {duration}</li>
    // }


    export default function ToDo({task,isDone,duration}){
    let listItem ;

    if(isDone===true){
        listItem = <li>Done : {task} Duration : {duration}</li>
    }
    else{
        listItem =  <li>Pending : {task} Duration: {null}</li>
    }
    return listItem;
}


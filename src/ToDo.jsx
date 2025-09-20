// function Todo({task,isDone}){
//     return(
        
//             <li>Task: {task} </li>
     
//     )
// }

// export default Todo

// export default function Todo({task,isDone}){
//     if(isDone===true){
//         return <h2>Done: {task}</h2>
//     }
//     else{
//         return <h2>pending: {task}</h2>
//     }
// }

// export default function Todo({task,isDone,time=0}){
//     if(isDone===true){
//         return <h2>Done: {task} time: {time}</h2>
//     }
    
//         return <h2>pending: {task} Time: {time}</h2>
    
// }

// export default function Todo({task,isDone,time=0}){
//     return isDone ? <li>Done: {task} {time}</li> : <li>Not Done: {task} {time}</li>

// }

export default function Todo({task,isDone,time=0}){
    let listItem;

    const displayTime = time? time : 100;

    if(isDone===true){
        listItem = <li>Done: {task} {time? 'Done' : "Not Done Yet!"}</li>
    }
    else{
        listItem = <li>Not Done: {task} {time}</li>
    }
    return listItem;
        
    
}
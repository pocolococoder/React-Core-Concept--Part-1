import './App.css'
function Book({book}){

    
    return(
        <div className="card">
            <h3>Book Name: {book.name}</h3>
            <h4>Book Price: {book.price} </h4>
        </div>
    )
}
export default Book
import Book from "./book"
export default function Library({books}){
    return(
        <div>
            <h2>Our National Library</h2>
            <p>Books collection : {books.length}</p>
            <p>Address : </p>
            <ul>
                {
                    books.map(book=><Book key={book.id} book={book}></Book>)
                }
            </ul>
        </div>
    )
}
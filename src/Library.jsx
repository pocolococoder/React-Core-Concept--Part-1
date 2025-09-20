import Book from './Book'
export default function Library({books}){
    console.log(books)
   return (
    <div>
        <h1>My central national library</h1>
        <h2>Books Collection: {books.length}</h2>
        <ul>
            {
                books.map(book=><Book key={book.id} book={book}></Book>)
            }
        </ul>
    </div>
   ) 
}
import db from "../config/fbconfig.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot, query, where, orderBy, startAt, endAt } from "firebase/firestore";

export default function DisplayBooks() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    const [searchBook, setSearchBook] = useState('');
    let timeOutId = null;

    const searchBookHandler = (e) => {
        if(timeOutId){
            clearTimeout(timeOutId);
        }
        const value = e.target.value;
        setTimeout((e) => {
            console.log(value)
            setSearchBook(value);
        }, 300);
    }

    useEffect(() => {
        const colRef = collection(db, 'books');
        let queries = query(colRef,
            orderBy("title"),
            startAt(searchBook),
            endAt(searchBook + '\uf8ff')
        )
        if (searchBook) {
            // If there's a search term, filter by it
            queries = query(colRef,
                orderBy('title'),
                startAt(searchBook),
                endAt(searchBook + '\uf8ff')
            );
        } 
        onSnapshot(queries, (snapshot) => {
            const bookData = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            setBooks(bookData);
        })
    }, [searchBook]);

    return (
        <div className="page">
            <div className="book-operation">
                <div className="table-container">
                    <div className="flexing">
                        <h2 className="title">All Books</h2>
                        <div className="searching">
                            <label htmlFor="search">Search 🔍</label>
                            <input type="text" name="search" onChange={searchBookHandler} placeholder="search"/>
                    </div>
                    </div>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Book ID</th>
                                <th>Book Title</th>
                                <th>Author</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books && books.map((book) => {
                                return (
                                    <tr key={book.id}>
                                        <td>{book.id}</td>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div style={{display:'flex', gap:'20px', justifyContent:'center', marginTop:'2%' }}>
                        <button style={{width:'40%', fontSize:'1.5rem', cursor:'pointer', borderRadius:'10px'}} onClick={() => navigate('/add')}>Add New</button>
                        <button style={{width:'40%', fontSize:'1.5rem', cursor:'pointer',borderRadius:'10px'}} onClick={() => navigate('/delete')}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

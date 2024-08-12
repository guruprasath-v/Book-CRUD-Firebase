import { useState } from 'react';
import db from "../config/fbconfig.js";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

export default function DeleteBook() {
    const [bookID, setBookId] = useState('');
    const [resp, setResp] = useState('');
    const navigate = useNavigate();

    const deleteBook = async (e) => {
        e.preventDefault();
        console.log(bookID)
        const docRef = doc(db, 'books', bookID);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document exists:", docSnap.data());
        } else {
            console.log("No such document!");
        }

        console.log(docRef)
        deleteDoc(docRef)
        .then(() => {
            setResp('Successfully deleted the book');
            setBookId('');
            setTimeout(() => {
                setResp('');
                navigate('/');
            }, 2000);
        })
        .catch(e => console.log(e.message));
    }

    return (
        <div className="book-page">
            <h1>Delete a Book</h1>
            <div className="book-operation">
                <form onSubmit={deleteBook}>
                    <label htmlFor="delete">Enter Book Id</label>
                    <input 
                        type="text" 
                        name="delete" 
                        value={bookID} 
                        onChange={e => setBookId(e.target.value)}
                    />
                    <button type="submit">Delete</button>
                    {resp && <p>{resp}</p>}
                </form>
            </div>
        </div>
    )
}

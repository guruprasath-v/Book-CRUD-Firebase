import db from "../config/fbconfig.js";
import { useState } from "react";
import {collection, addDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function AddBook(){
    const colRef = collection(db, 'books');
    const navigate = useNavigate();
    const [newBookData, setNewBookData] = useState({
        author:'',
        title:''
    });
    const [resp, setResp] = useState('')

    const createBook = (e) => {
        e.preventDefault(); // Prevent form submission at the start
    
        if (newBookData.author && newBookData.title) {
            addDoc(colRef, newBookData)
            .then(() => {
                setNewBookData({ author: '', title: '' });
                setResp('Successfully Added new book');
                setTimeout(() => {
                    setResp('');
                    navigate('/');
                }, 3000);
            });
        } else if (!newBookData.author && !newBookData.title) {
            setResp('Invalid Author and Title');
        } else if (!newBookData.author) {
            setResp('Invalid Author');
        } else if (!newBookData.title) {
            setResp('Invalid Title');
        }
    
        setTimeout(() => {
            setResp('');
        }, 3000);
    };
    



    return(
        <div className="book-page">
            <h1>Add new Book</h1>
            <div className="book-operation">
                <form onSubmit={createBook}>
                    <label htmlFor="author-name">Enter Author Name</label>
                    <input type="text" name="author" autoComplete="false" value={newBookData.author} onChange={e=>setNewBookData({...newBookData, [e.target.name]:e.target.value})}/>
                    <label htmlFor="title">Enter title</label>
                    <input type="text" name="title" autoComplete="false" value={newBookData.title} onChange={e=>setNewBookData({...newBookData, [e.target.name]:e.target.value})}/>
                    <button>Add</button>
                    {resp && <p>{resp}</p>}

                </form>
            </div>
        </div>
    )
}
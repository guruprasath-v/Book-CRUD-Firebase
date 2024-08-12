
import { Route, Routes } from 'react-router-dom';
import DeleteBook from './components/DeleteBook.jsx';

import AddBook from "./components/AddBook.jsx";
import DisplayBooks from './components/DisplayBooks.jsx';



function App() {
  return(
      <Routes>
        <Route path='/' element={<DisplayBooks />}/>
        <Route path='/add' element = {<AddBook/>} />
        <Route path='/delete' element = {<DeleteBook />} />
      </Routes>
  )
}

export default App;

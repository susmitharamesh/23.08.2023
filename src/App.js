
import React, { useState } from 'react';
import "./index.css"
function BookLibrary() {
  const[serial,setSerial] =useState(0)
  const [books, setBooks] = useState([]);
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentAuthor, setCurrentAuthor] = useState('');
  // const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isChecked, setIsChecked] = useState(false)
  const checkHandler = () => {
    setIsChecked(!isChecked) 
  }
  
  const addBook = () => {
    if (currentTitle.trim() && currentAuthor.trim() !== '') {

      setBooks([...books, { title: currentTitle, author: currentAuthor }]);
      setCurrentTitle('');
      setCurrentAuthor('');
      setSerial(serial+1)
    }
    else{
      alert("Please add a new book")
    }
  };

  // const updateBook = (index) => {
  //   if (currentTitle.trim() && currentAuthor.trim() !== '') {
  //     alert("Please add a new book")
  //     const updatedBooks = [...books];
  //     updatedBooks[index] = { title: currentTitle, author: currentAuthor };
  //     setBooks(updatedBooks);
  //     setCurrentTitle('');
  //     setCurrentAuthor('');
  //     // setSelectedIndex(-1);
  //   }
  // };
  
  
  const deleteBook = (index) => {
    const filteredBooks = books.filter((_, i) => i !== index);
    setBooks(filteredBooks);
    setSerial(serial-1)
  };

  return (
    <>
        <h1>Book Library App</h1>
    <div className="App">
  
      <div className="book-container">
        <div className="book-form">
          <label className="title">Title :</label>
          <input
            value={currentTitle}
            onChange={(event) => setCurrentTitle(event.target.value)}
            placeholder="Enter book title..."
          />
          <br /><br/>
          <label className="author">Author :</label>
          <input
            value={currentAuthor}
            onChange={(e) => setCurrentAuthor(e.target.value)}
            placeholder="Enter book author..."
          />
          <br /><br/>
          <button className="submit" onClick={addBook}>
              Add Book
            </button>
          {/* {selectedIndex === -1 ? (
            
          ) : (
            <button onClick={() => updateBook(selectedIndex)}>Update Book</button>
          )} */}
        </div>
        <h2>My Book Library</h2>
        <div className="book-list">
        <p>No.Of Books:{serial}</p>
       
          <ul>
            {books.map((book, index) => (
              <li key={index}>
                <input type="checkbox" id="checkbox" checked={isChecked} style={{color: isChecked ? 'green':'red'}} onChange={checkHandler} />
      <label htmlFor="checkbox"> </label>
      
   
     <p style={{color: isChecked ? 'green':'red'}}></p>

                <strong>{book.title}</strong> by {book.author}
                {/* <button onClick={() => setSelectedIndex(index)}>Edit</button> */}
                <button onClick={() => deleteBook(index)}>Delete</button>
               
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}



export default function App() {
  return (
    <div className="App">
      <BookLibrary/>
    </div>
  );
}


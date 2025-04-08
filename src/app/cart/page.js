"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const Cart = () => {
  const [removeMovie, setRemoveMovie] = useState([  
    { id: 1, title: "Movie 1" },
    { id: 2, title: "Movie 2" },
    { id: 3, title: "Movie 3" },
  ]);

  const [addMore, setAddMore] = useState([  
    { id: 1, title: "Movie 1" },
    { id: 2, title: "Movie 2" },
    { id: 3, title: "Movie 3" },
  ]);

  const [clear, setClear] = useState([]);

  const deleteMovie = (movieId) => {  
    setRemoveMovie((prevCart) =>
      prevCart.filter((movie) => movie.id !== movieId)
    );
    toast.success("Movie removed from cart!")
  };
  
  const plustoitems = (movieId) => {
    setAddMore((prevCart) => [
      ...prevCart, 
      { id: movieId, title: `Movie ${movieId}` },
    ]);
    toast.info("Movie added to cart!");
  };

  const clearAll = (movieId) => {
setAddMore([]);
setRemoveMovie([]);
  };

  return (
    <>
      <h3>Your Cart</h3>
      <ul>
        {removeMovie.map((movie) => (  
          <li key={movie.id}>
            {movie.title}
            <button onClick={() => deleteMovie(movie.id)}>Remove this item</button>
          </li>
        ))}
      </ul>

      
      <ul>
      <h3>Add More Movies</h3>
        {addMore.map((movie) => (  
          <li key={movie.id}>
            {movie.title}
            <button onClick={() => plustoitems(movie.id)}>Plus Items</button>
          </li>
        ))}
      </ul>

      <h3>Clear Your Cart</h3>
      <button onClick={clearAll}>Clear all items</button>

      <Navbar />
    </>
  );
};

export default Cart;

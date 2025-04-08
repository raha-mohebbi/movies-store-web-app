"use client";

import { useState, useEffect } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('/posts.json')  
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addToCart = (movie) => {
    setCart((prevCart) => [...prevCart, movie]);
  };

  return (
    <div>
      <h2>Movies</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ textAlign: 'center' }}>
            <h4>{movie.title}</h4>
            <img src={movie.image} alt={movie.title} style={{ width: '100%', height: 'auto' }} />
            <p>{movie.body}</p>
            <button onClick={() => addToCart(movie)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div>
        <h3>Cart</h3>
        <ul>
          {cart.map((movie, index) => (
            <li key={index}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieList;

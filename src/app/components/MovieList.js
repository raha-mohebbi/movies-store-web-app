"use client"

import { useState } from 'react';

const MovieList = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (movie) => {
    setCart((prevCart) => [...prevCart, movie]);
    toast.success(`${movie} added to cart!`, {
  position: "top-right",
});
  }

  return (
    <div>
      <h2>Movies</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        <div style={{ textAlign: 'center' }}>
          <img src="/assets/81loo+djtML._AC_UF894,1000_QL80_.jpg" style={{ width: '100%' }} alt="Movie 1" />
          <button onClick={() => addToCart("Movie 1")}>Buy</button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img src="/assets/81wiqtQFD+L._AC_UF1000,1000_QL80_.jpg" style={{ width: '100%' }} alt="Movie 2" />
          <button onClick={() => addToCart("Movie 2")}>Buy</button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img src="/assets/83261_m1331694378.webp" style={{ width: '100%' }} alt="Movie 3" />
          <button onClick={() => addToCart("Movie 3")}>Buy</button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img src="/assets/Agents_of_HYDRA_Poster.webp" style={{ width: '100%' }} alt="Movie 4" />
          <button onClick={() => addToCart("Movie 4")}>Buy</button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img src="/assets/blackwidowavengersageofultronposter.webp" style={{ width: '100%' }} alt="Movie 5" />
          <button onClick={() => addToCart("Movie 5")}>Buy</button>
        </div>
      </div>

     
      <div>
        <h3>Cart</h3>
        <ul>
          {cart.map((movie, index) => (
            <li key={index}>{movie}</li> 
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieList;

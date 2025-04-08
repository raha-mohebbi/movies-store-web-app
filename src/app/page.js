import MovieList from "./components/MovieList";
import { Fragment } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
<div className="center-block" style={{backgroundColor:"yellow", color:"black"}}>
    <h1>Main Page Of Store</h1>
    </div>
    <div>
      <MovieList/>
    </div>
    <div>
      <Navbar/>
    </div>
    </>
      )
      
}

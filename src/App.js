import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './Component/MovieCard';
import SearchIcon from './search.svg'
const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=522b6133'
// const movie1={
  
//     "Title": "Spiderman and Grandma",
//     "Year": "2009",
//     "imdbID": "tt1433184",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"

// }
const App=()=> {
  const[movies,setMovies]=useState([]);
  const[searchItem,setSearchitem]=useState('');
  const searchMovie=async(title)=>{
    const response= await fetch(`${API_URL}&s=${title}`); 
    const data= await response.json();
    setMovies(data.Search)
  }
  useEffect(()=>{
    searchMovie('Spiderman')
  },[])


  return (
    <div className="app">
      <h1>Movie App</h1>
      <div className='search'>
        <input placeholder='Search your movie'
        value={searchItem}
        onChange={(e)=>setSearchitem(e.target.value)
           
        }/>

        <img src={SearchIcon} alt='searchicon'
        onClick={()=>searchMovie(searchItem)

        } />

        </div>
        {movies?.length >0?
          (<div className='container'>
            {movies.map((movie)=>(
              <MovieCard movie={movie}/>
            ))}
         </div>):(
         <div className='empty'>
         <h2>No Movie Here</h2>
        </div>)
         }

      
     
    </div>
    
  );
}

export default App;

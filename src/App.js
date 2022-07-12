import {useEffect} from 'react'
import './App.css'
// 56d18197
const API_URL = 'http://www.omdbapi.com?apikey=56d18197'
const App = () => {


  // ! the async helps to fetch data
const searchMovie = async (title) =>  {
const response = await fetch(`${API_URL}&s=${title}`);
const data = await response.json();
console.log(data.Search);
  }

  useEffect(() =>{
searchMovie('batman')
    },[]
  );
  return (
    <div className='app'>
      <h1>MovieLand</h1>

<div className='search'>
  <input  placeholder='Search for Movies '/>
</div>
    </div>
  )
}

export default App
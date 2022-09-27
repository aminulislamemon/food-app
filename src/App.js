import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import FoodCards from './components/FoodCards/FoodCards'
import "./App.css";
function App() {
  const [search, setSearch] = useState('');
  const [foods, setFoods] = useState([]);
  useEffect(()=>{
    try {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res=> res.json())
      .then(data => setFoods(data.meals))
      
    } catch (error) {
      console.log('sorry data can not fetched');
    }
  }, [search]);  
  return (
    <div className="App">
       <div className='py-3 flex items-center justify-center'>
            <input onChange={(e)=>{setSearch(e.target.value)}} placeholder='Search...' className='px-10 py-2 outline-none border-2 border-purple-200 rounded-full' type="text" />
            <FontAwesomeIcon className='ml-3 px-3 py-3 rounded-full border-2 border-purple-300' icon={faSearch}/>
        </div>
        <FoodCards foods={foods}/>
    </div>
  );
}

export default App;

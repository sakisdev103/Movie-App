import React, { useEffect, useState } from 'react';
import Main from './components/Main';

//Api 

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=2ce36188';

const App = () => {
  const [items, setItems] = useState([]);
  
  //Fetching data from api

  const fetchData = async (title) => {
    const response = await fetch(`${API_URL}&s=${title} `);
    const data = await response.json();

    //checking for the data
    if(data.Response === 'True'){
      setItems(data.Search);
    }else{
      setItems([]);
    }
  }

  useEffect(()=>{
    fetchData('Superman');    
  }, [])
  
  return (
    <>
      <Main movies = {items} data = {fetchData }/>
    </>
  )
}

export default App

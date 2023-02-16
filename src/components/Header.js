import React, { useState } from 'react';

const Header = ({movies}) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) =>{
    setText(e.target.value);
    console.log(movies);
    const fetchData = movies.filter((movie)=>{
      if(movies === ''){
        return movie;
      }
      else{
        return movie.Title.toLowerCase().includes(text);
      }
    })
  }
  return (
    <>
        <div className="search-container">
            <input type="text" value={text} onChange={handleSubmit}/>
        </div>
    </>
  )
}

export default Header
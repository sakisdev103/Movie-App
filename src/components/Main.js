import React, { useState } from 'react';

const Main = ({movies, data}) => {
  const [text, setText] = useState('');
  const [displayError, setDisplayError] = useState('');

  //Getting text from input 

  const handleChange = (e) =>{
    let varToLowerCase = e.target.value.toLowerCase();
    setText(varToLowerCase);
  }

  //When form is submited, we are passing the text from the input to function and we fetch for data again

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(text !== ''){
      setDisplayError('');
      data(text);
    }else{
      setDisplayError('Please fill out the field.');
      setTimeout(()=>{
        setDisplayError('');
      },1500)
    }
  }

  return (
    <>
        <form className="search-container" onSubmit={handleSubmit}>
          <div className="search-flex">
            <input type="text" placeholder='Search for movies' value={text} onChange={handleChange}/>
            <button type="submit" className='search-btn'><img src="https://img.icons8.com/ios/25/null/search--v1.png" alt=''/></button>
          </div>
          <p className='error'>{displayError}</p>
        </form>
        <div className="main-container">
            {
                movies.map((movie)=>{
                    return(
                        <div className="movie-card" key={movie.imdbID}>
                            <div className="img-container">
                                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt="" />
                            </div>
                            <div className="details">
                              <div className="info">
                                  <p>{movie.Type}</p>
                                  <p>{movie.Year}</p>
                              </div>
                              <h4>{movie.Title.length <= 40? movie.Title : `${movie.Title.slice(0,40)}...`}</h4>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
        {
          movies.length === 0 
          ?
            <div className='empty-list'>
              <h3>Something went wrong, please try again</h3>
            </div> 
          : null  
        }
    </>
  )
}

export default Main
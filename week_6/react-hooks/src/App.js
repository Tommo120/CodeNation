import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState(
    [
      {
        name: 'Eternal Sunshine of the Spotless Mind',
        year: 2004
      },
      {
        name: 'The Matrix',
        year: 1999
      },
      {
        name: 'The Matrix Reloaded',
        year: 2003
      },
      {
        name: 'The Matrix Revolutions',
        year: 2003
      },
      {
        name: '2001: A Space Odyssey',
        year: 1968
      },
      {
        name: 'A Clockwork Orange',
        year: 1971
      },
      {
        name: 'Moon',
        year: 2009
      },
      {
        name: 'Cloverfield',
        year: 2008
      },
      {
        name: 'Willy Wonka & the Chocolate Factory',
        year: 1971
      },
      {
        name: 'Toy Story',
        year: 1995
      }
    ]
  );

  const [filteredMovies, setFilter] = useState(['']);

  const noResults = [
    {
      name: 'Search returned no results',
      year: ''
    }
  ];

  useEffect(() => {
    setFilter([...movies]);
  }, [])

  const changeMovie = (index, name, year) => {
    const moviesUpdated = [ ...movies ];
    moviesUpdated[index].name = name;
    moviesUpdated[index].year = year;
    setMovies(moviesUpdated);
  }

  const addMovie = (name, year) => {
    const moviesUpdated = [ ...movies ];
    moviesUpdated.push({name: name, year: year});
    setMovies(moviesUpdated);
  }

  const searchMovies = (e) => {
    const movieList = [...movies];

    let name = e.target.value;

    // if(name == '') {
    //   setFilter([]);
    //   return;
    // }

    const filter = movieList.filter((movie) => {
      let title = movie.name.toLowerCase();
      return title.indexOf(name.toLowerCase()) >= 0
    });

    setFilter(filter);
  }

  const noMatchesFound = () => {
    if(filteredMovies.length === 0) {
      console.log("There are no results");
      return 'No Results';
    } else {
      return;
    }
    
  }

  return (
    <div className='container'>
      <h1>Movies</h1>
      {/* {movies.map( (movie) => {
        return <div className='movie'><h2 className='title'>{movie.name}</h2><br/><h4 className='year'>{movie.year}</h4></div>
        })}
      <button onClick={() => changeMovie(1, 'Gladiator', 2001)}>Change Movie</button>
      <button onClick={() => addMovie('Matrix Reloaded', 2003)}>Add Movie</button> */}
      <h4>Filter</h4>
      <input type='text' onChange={searchMovies}/>
      {filteredMovies.map((movie) => {
        return <div className='movie'><h2 className='title'>{movie.name}</h2><br/><h4 className='year'>{movie.year}</h4></div>
      })}
      <div><h2>{noMatchesFound()}</h2></div>
      
    </div>
  );
}

export default App;

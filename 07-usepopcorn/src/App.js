import { useEffect, useRef, useState } from "react";
import StarRating from "./StarRating";
import { useMovies } from "./useMovies";
import { useLocalStorageState } from "./useLocalStorageState";
import { useKey } from "./useKey";

const KEY = "a19da93";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  // Custom hook imported and immediately destructuring which needs to use in this file.
  const { movies, isLoading, error } = useMovies(query);

  // Exported custom hook to handle localstorage state and useEffect
  const [watched, setWatched] = useLocalStorageState([], "watched");

  // Select the movie clicked
  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  // Clear Selection from right list
  function handleCloseMovie() {
    setSelectedId(null);
  }

  // Add Watched Movies
  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  // Delete Watched Movies
  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <Navbar>
        <Search
          onCloseMovie={handleCloseMovie}
          query={query}
          setQuery={setQuery}
        />
        <NumResults movies={movies} />
      </Navbar>

      <Main>
        {/* Movie List */}
        <Box>
          {/* loading and no error. */}
          {isLoading && !error && <Loader />}

          {/* not loading and no error */}
          {!isLoading && !error && (
            <MovieList onSelect={handleSelectMovie} movies={movies} />
          )}

          {/* error */}
          {error && <ErrorMessage message={error} />}

          {/* no movie found yet, and not loading [ Beginning state ] */}
          {movies.length < 1 && !isLoading && !query && <StartSearching />}
        </Box>

        {/* Watched Movie List */}
        <Box>
          {selectedId ? (
            <MovieDetails
              onCloseMovie={handleCloseMovie}
              selectedId={selectedId}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

// Navbar itself
function Navbar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

// NavLogo
function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

// NavSearch
function Search({ query, setQuery, onCloseMovie }) {
  //* React is all about Declarative so we need to use "useRef" to select elements
  //! Set useRef to some variable, then call it like prop into element, and use into useEffect
  const inputEl = useRef(null);

  // Custom Hook
  useKey("Enter", function () {
    // Focused element already inputEl then return;
    if (document.activeElement === inputEl.current) return;

    // Focus to element when hit "Enter"
    inputEl.current.focus();

    // Clear input field on hit "Enter"
    setQuery("");

    // Close MovieDetails on hit "Enter"
    onCloseMovie();
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

// NavResults
function NumResults({ movies }) {
  // Don't show which has no image
  const fixedMovies = movies.filter(
    (movie) => movie.Poster !== "N/A" && movie.Year.length <= 4
  );

  return (
    <>
      {movies.length !== 0 ? (
        <p className="num-results">Found {fixedMovies.length} results</p>
      ) : (
        <p className="num-results">No results yet 🤷‍♂️</p>
      )}
    </>
  );
}

// Button
function Button({ setIsOpen, isOpen }) {
  return (
    <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
      {isOpen ? "-" : "+"}
    </button>
  );
}

// Main Both Rendering Movie list and Watched List
function Main({ children }) {
  return <main className="main">{children}</main>;
}

// List of API Result
function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <Button setIsOpen={setIsOpen} isOpen={isOpen} />
      {isOpen && children}
    </div>
  );
}

// API MovieList
function MovieList({ movies, onSelect }) {
  return (
    <ul className="list list-movies">
      {movies?.map(
        (movie) =>
          movie.Poster !== "N/A" &&
          movie.Year.length <= 4 && (
            <Movie onSelect={onSelect} movie={movie} key={movie.imdbID} />
          )
      )}
    </ul>
  );
}

// Each movie From API
function Movie({ movie, onSelect }) {
  return (
    <li onClick={() => onSelect(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>📅</span>
          <span>{movie.Year.slice(0, 4)}</span>
        </p>
      </div>
    </li>
  );
}

function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
  // Handle api data
  const [movie, setMovie] = useState({});

  // Handle loading and error
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle user rate
  const [userRating, setUserRating] = useState("");

  // Handle userRating how many clicked behind the scene
  const countRef = useRef(0);

  useEffect(
    function () {
      // On each userRating re-render by click, add +1, and ofc control at the beginning it exists ?
      if (userRating) countRef.current += 1;
    },
    [userRating]
  );

  // Already watched list includes ?
  const isWatchedAlready = watched
    .map((movie) => movie.imdbID)
    .includes(selectedId);

  // Already rated? so calculate and display rate
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  // Destructure movie object with lowerCase keys
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  // Handle add to watched, create new object
  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      // And use the ref on add to count decisions
      countRatingDecisions: countRef.current,
    };

    // Comes from App [...movies, newWatchedMovie]
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  // Handle API call
  useEffect(
    function () {
      async function getMovieDetails() {
        try {
          setIsLoading(true);
          // setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
          );
          const data = await res.json();

          // Handling errors
          if (!res.ok) throw new Error("Something went wrong...");

          setMovie(data);
          setIsLoading(false);
        } catch (err) {
          setError(err.message);
        }
      }
      getMovieDetails();
    },
    [selectedId]
  );

  // Change title
  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      // Cleanup function
      return function () {
        document.title = "usePopCorn";
      };
    },
    [title]
  );

  // Handle keyPress "ESC" to close MovieDetails
  // useEffect(
  //   function () {
  //     //! Set it named function to call on cleanup function.
  //     function handleKeyDown(e) {
  //       if (e.key === "Escape") {
  //         onCloseMovie();
  //         console.log("CLOSING");
  //       }
  //     }

  //     document.addEventListener("keydown", handleKeyDown);

  //     //! Need to clear eventListener, otherwise they are stacking up into DOM
  //     //! Cleanup function need to be exactly the same as event listener
  //     return function () {
  //       document.removeEventListener("keydown", handleKeyDown);
  //     };
  //   },
  //   [onCloseMovie]
  // );

  useKey("Escape", onCloseMovie);

  // JSX
  return (
    <div className="details">
      {error && <ErrorMessage message={error} />}
      {isLoading && !error && <Loader />}
      {!isLoading && !error && (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDB rating
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!isWatchedAlready ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p style={{ textAlign: "center" }}>
                  You rated this movie &nbsp;
                  <span className="watched-rate">{watchedUserRating}</span> ⭐
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

// WatchedBox Item
function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}

// Watched Movies
function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button
          className="btn-delete"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}

// Average function
const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

// WatchedBox Summary
function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{Math.round(avgRuntime)} min</span>
        </p>
      </div>
    </div>
  );
}

// Loader before data arrive
function Loader() {
  return <p className="loader">⏳ Loading...</p>;
}

// Error message
function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔</span> {message}
    </p>
  );
}

// Start Searching Text
function StartSearching() {
  return (
    <p className="loader">
      Start searching <span>🔍</span>
    </p>
  );
}

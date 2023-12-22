import { useState, useEffect } from "react";

//! API KEY
const KEY = "a19da93";

// Created Custom hook which fetching data
export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  // Handle loading data situation, set true at the begining of fetching, and set false at the end.
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  //! To fix infinite re-render loop need useEffect and make it async
  useEffect(
    function () {
      //   callback?.();

      // Controls data fetching for useEffect cleanup function
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          // At the beginning set the loading and error every time
          setIsLoading(true);
          setError("");

          // pass a second argument { signal: controller.signal }
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          const data = await res.json();

          // Error handlings
          if (!res.ok) throw new Error("Something went wrong...");
          if (data.Response === "False") throw new Error("Movie not found.");

          // Set Data
          setMovies(data.Search);
          setIsLoading(false);
          setError("");
        } catch (err) {
          //! To ignore "AbortError" and let app keep working
          if (err.name !== "AbortError") setError(err.message);
        }
      }

      // At the beginning before search don't show Error
      if (query.length < 2) {
        setIsLoading(false);
        setMovies([]);
        setError("");

        // And these happens, do not fetch data.
        return;
      }
      // When there is another seach, close movie details

      fetchMovies();

      //! Cleanup function which cancels previous fetch requests (Aborting previous calls)
      //! Because each time we write to search, this component is re-renders, then cleanup
      //! function calls again and again. It allows us each time cancel previous
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  // Need to return this values to access into App.js
  return { movies, isLoading, error, KEY };
}

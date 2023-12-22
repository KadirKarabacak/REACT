import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [watched, setWatched] = useState(function () {
    // We cant set key as "watched", it must be dynamic
    const storedValue = localStorage.getItem(key);
    // Initial state is null at beginning, so we have to return conditionally.
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  //! And actually local storage better into useEffect
  useEffect(
    function () {
      // To read items, we set state at the beginning as a callback function
      localStorage.setItem(key, JSON.stringify(watched));
    },
    [watched, key]
  );

  return [watched, setWatched];
}

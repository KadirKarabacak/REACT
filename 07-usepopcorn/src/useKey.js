import { useEffect } from "react";

export function useKey(key, action) {
  // Handle keyPress "ESC" to close MovieDetails
  useEffect(
    function () {
      //! Set it named function to call on cleanup function.
      function handleKeyDown(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
          console.log("CLOSING");
        }
      }

      document.addEventListener("keydown", handleKeyDown);

      //! Need to clear eventListener, otherwise they are stacking up into DOM
      //! Cleanup function need to be exactly the same as event listener
      return function () {
        document.removeEventListener("keydown", handleKeyDown);
      };
    },
    [action, key]
  );
}

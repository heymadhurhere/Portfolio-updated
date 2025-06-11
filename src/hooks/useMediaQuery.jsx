import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const updateMatch = () => setMatches(media.matches);

    updateMatch(); // Set initial value

    if (media.addEventListener) {
      media.addEventListener("change", updateMatch);
    } else {
      media.addListener(updateMatch); // For older browsers
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", updateMatch);
      } else {
        media.removeListener(updateMatch);
      }
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;

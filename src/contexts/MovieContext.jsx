// TODO: implement the favorites store.
//   - Create a context with createContext().
//   - MovieProvider holds the favorites array in useState, seeded from
//     localStorage (JSON.parse) so favorites survive a refresh.
//   - Whenever favorites change, write them back with
//     localStorage.setItem("favorites", JSON.stringify(favorites)).
//   - Expose: favorites, addToFavorites(movie), removeFromFavorites(id),
//     isFavorite(id).
//   - Export a useMovie() hook that reads the context and throws a helpful
//     error if it is used outside of <MovieProvider>.

export default function MovieProvider({ children }) {
  return children;
}

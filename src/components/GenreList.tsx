import useGenres from "../hooks/useGenres"

function GenreList() {
    const {genres} = useGenres();
  return (
    <ul>
      {genres.map((genresItem) => (<li key={genresItem.id}>{genresItem.name}</li>))}
    </ul>
  )
}

export default GenreList

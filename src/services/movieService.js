const movies = [
  {
    id: "1",
    name: "Spiderman Into the Spider-Verse",
    type: "3D",
    times: ["11:00", "14:00", "18:00"],
    poster: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/spiderman_verse_rating_0.jpg?itok=N_U_lGHQ" 
  },
  {
    id: "2",
    name: "Spiderman Across the Spider-Verse",
    type: "3D",
    times: ["14:00", "18:00", "22:00"],
    poster: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/DP_7175931_SPIDER-MANACROSSTHESPIDER-VERSE_2000x3000_HEDkRedShadowKeyArt_0.jpg?itok=CkYeyihm" 
  },
  {
    id: "3",
    name: "Venom",
    type: "2D",
    times: ["11:00", "14:00", "18:00"],
    poster: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/venom_onesheet_1400x2100_rated.png?itok=0tO6umMg" 
  },
  {
    id: "4",
    name: "Venom Let There Be Carnage",
    type: "2D",
    times: ["14:00", "18:00", "22:00"],
    poster: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/venomltbc_onesheet_1400x2100_est_0.jpg?itok=niH5C8AR" 
  }
];

export function getMovies(filter) {
  if (filter?.type) {
    return Promise.resolve(
      movies.filter((movie) => movie.type === filter.type)
    );
  }

  return Promise.resolve(movies);
}

export function getMovieById(movieId) {
  return Promise.resolve(movies.find((movie) => movie.id === movieId));
}
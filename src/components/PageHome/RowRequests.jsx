import { TMDB_API_KEY } from "../../keys";

export const RowRequest = {
  getTrending: `trending/tv/week?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
  getAction: `discover/tv?api_key=${TMDB_API_KEY}&language=en-US&page=1&with_genres=10759&watch_region=US`,
  getComedy: `discover/tv?api_key=${TMDB_API_KEY}&language=en-US&page=1&with_genres=35&watch_region=US`,
  getSciFantasy: `discover/tv?api_key=${TMDB_API_KEY}&language=en-US&page=1&with_genres=10765&watch_region=US`,
  getDrama: `discover/tv?api_key=${TMDB_API_KEY}&language=en-US&page=1&with_genres=18&watch_region=US`,
  getReality: `discover/tv?api_key=${TMDB_API_KEY}&language=en-US&page=1&with_genres=10764&watch_region=US`,
};

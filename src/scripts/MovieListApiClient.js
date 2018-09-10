const MovieListApiClientConfig = {
    baseUri: {
        allMovie: "https://api.themoviedb.org/3/search/movie"
    },
    apiKey:        "4fab322f664152d96a5de33803ffc967",
    language:      "en-US",
    includeAdult:  "false",
    imageUrl:      "https://image.tmdb.org/t/p/w185_and_h278_bestv2"
}

/**
 * Create a new object that contains a list of movies with title, overview, relase date and poster image
 * @param  {Object} res
 * @return {Promise}
 */
export function allMovie(res) {

    const imageUrl = MovieListApiClientConfig.imageUrl;

    res.data.results = res.data.results.map((item) => {
        return {
            title: item.title,
            overview: item.overview,
            releaseDate: item.release_date,
            posterPath: imageUrl + item.poster_path
        }
    })

    return Promise.resolve(res.data);

}

/**
 * Reject and return an error in case of failur
 * @param  {Object} err
 * @return {Promise}
 */
export function allMovieError(err) {

    return Promise.reject(err);

}

class MovieListApiClient {

    constructor(axios){
        this.axios = axios;
    }

    /**
     * Get all list of movies base on query research and page.
     * @param  {Object} [data={}] data.query and data.page
     * @return {Promise}
     */
    getAllMovieList = (data = {}) => {

        const query = data.query;
        const page = data.page;

        return this.axios.get(MovieListApiClientConfig.baseUri.allMovie, {
            params: {
                api_key: MovieListApiClientConfig.apiKey,
                language: MovieListApiClientConfig.language,
                query: query,
                page: page,
                include_adult: false
            }
        })
        .then(res => allMovie(res))
        .catch(allMovieError)

    }

}

export default MovieListApiClient;

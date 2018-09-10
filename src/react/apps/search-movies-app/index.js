import React, {Component}       from 'react';
import './search-movies.scss'

// import components
import ItemMovie from '../../components/search-movies/item-movie';
import HeaderInfo from '../../components/search-movies/header-info';

// import the move list client
import MovieListApiClient from '../../../scripts/MovieListApiClient';

// dependency injection
const axios = require('axios');
const movieListApiClient = new MovieListApiClient(axios);

class SearchMovieApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            movieDBList : [],
            totalResults: 0,
            totalPages: 0,
            page: 1
        }
    }

    /**
     * Handle form submission, run getAllMovieList and update the app state
     * @param  {Object} event
     * @return {void}
     */
    handleSearchMovieSubmit = (event) => {

        event.preventDefault();

        movieListApiClient.getAllMovieList({
            'query': this.state.query,
            'page': 1
        }).then(res => {
            this.setState({
                movieDBList: res.results,
                totalResults: res.total_results,
                totalPages: res.total_pages,
                page: res.page
            });

        });

    };

    /**
     * Update the query parameter
     * @param  {Object} event
     * @return {void}
     */
    handleSearchMovie = (event) => {

        this.setState({
            query: event.target.value
        })

    }

    render(){

        const MovieList = (data) => {

            const allMovies = data.data;

            console.log(allMovies);

            if(allMovies && allMovies.length) {

                return allMovies.map((item) => {

                    return (

                        <ItemMovie
                            title={item.title}
                            overview={item.overview}
                            posterPath={item.posterPath}
                            releaseDate={item.releaseDate}
                        />

                    )

                });

            }

            return <div className="search-movies__no-results">No results</div>

        }

        return (
            <section className="search-movies">

                <div className="search-movies__form-container">

                    <form name="form" onSubmit={this.handleSearchMovieSubmit}>
                        <input className="search-movies__input" type="text" name="search" placeholder="Enter a movie title" value={this.state.query} onChange={this.handleSearchMovie}/>
                        <button>Submit</button>
                    </form>

                </div>

                <div className="search-movies__info-container">

                    <HeaderInfo
                          totalResults={this.state.totalResults}
                          totalPages={this.state.totalPages}
                          page={this.state.page}
                    />

                </div>

                <div className="search-movies__result-conatiner">

                    <MovieList data={this.state.movieDBList} />

                </div>

            </section>
        );

    }

}

export default SearchMovieApp;

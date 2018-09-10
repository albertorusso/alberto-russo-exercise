import React, {Component}       from 'react';

// import the move list client
import MovieListApiClient from '../../scripts/MovieListApiClient';

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
            console.log(res);
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

        return (
            <section>
                <form name="search"
                      onSubmit={this.handleSearchMovieSubmit}>
                    <div>
                        <input type="text" name="search" placeholder="Enter the movie title" value={this.state.query} onChange={this.handleSearchMovie}/>
                    </div>
                    <button>Submit</button>
                </form>
            </section>
        );

    }

}

export default SearchMovieApp;

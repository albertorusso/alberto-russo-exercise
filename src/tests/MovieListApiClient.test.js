import MovieListApiClient, {allMovie} from '../scripts/MovieListApiClient'

import AllMoviesApiRes from './fixtures/allMoviesApiRes';

test("allMovie reduce data", () => {

    const API_RESPONSE = AllMoviesApiRes;

    const actual = allMovie(API_RESPONSE)
    const expected = {
        page:1,
        results: [
            {
                overview: 'When world heavyweight boxing champion, Apollo Creed wants to give an unknown fighter a shot at the title as a publicity stunt, his handlers choose palooka Rocky Balboa, an uneducated collector for a Philadelphia loan shark. Rocky teams up with trainer  Mickey Goldmill to make the most of this once in a lifetime break.',
                posterPath: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/9TUR3s1PMJHwDRbpm7PWQ0S7IRy.jpg',
                releaseDate: '1976-11-21',
                title: "Rocky"
            }
        ],
        total_pages:1,
        total_results: 1
    }

    expect(actual).resolves.toEqual(expected);

});

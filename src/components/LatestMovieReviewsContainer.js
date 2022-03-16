import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Pa3hOhDJaFJojM7knqIvsr1c3AlOTAs5';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {

    state = {
        reviews: []
    }

    componentDidMount () {
        fetch(URL)
        .then(res => res.json())
        .then(res => 
            this.setState({
                reviews: res.results
            })
        )

    }

    render() {
        return (
            <div className='latest-movie-reviews'>
                <h1>Latest Movie Reviews</h1>
                <MovieReviews reviews={this.state.reviews}/>
             </div>
        )
    }
}

export default LatestMovieReviewsContainer

import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Pa3hOhDJaFJojM7knqIvsr1c3AlOTAs5';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    handelSubmit = e => {
        e.preventDefault();
        fetch(URL+this.state.searchTerm)
        .then(res => res.json())
        .then(res => {
            this.setState({
                reviews: res.results
            })
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() {
        return (
            <div className='searchable-move-reviews'>
                <MovieReviews reviews={this.state.reviews}/>
                <form onSubmit={this.handelSubmit}>
                    Search <input type='text' onChange={this.handleChange}></input>
                </form>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer

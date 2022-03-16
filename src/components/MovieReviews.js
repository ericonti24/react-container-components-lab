// Code MovieReviews Here
import React from 'react'

// const Review = ({title}) => {return (<div key={title} className="review"></div>)}

// const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>



const review = ({review}) => <li className={'review'}> {review}</li>
const MovieReviews  = props => <ul className={'review-list'}>{props.reviews.map(review)}</ul>




export default MovieReviews

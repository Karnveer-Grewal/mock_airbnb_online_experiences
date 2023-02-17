import React from 'react';
import ratingStar from '../images/cards/rating-star.png';

function Card(props) {
  let badgeText;
  if (!props.openSpots) {
    badgeText = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img src={props.coverImg} alt='katie-zaferes' className='card--image' />
      <div className='card--stats'>
        <img src={ratingStar} alt='rating-star' className='card--star' />
        <span>{props.stats.rating}</span>
        <span className='gray'>({props.stats.reviewCount}) • </span>
        <span className='gray'>{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className='bold'>From ${props.price}</span> /person
      </p>
    </div>
  );
}

export default Card;

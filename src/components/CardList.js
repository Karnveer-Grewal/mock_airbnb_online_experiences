import React from 'react';
import data from '../data';
import Card from './Card';

console.log(data);

const cardList = data.map((item) => {
  return <Card key={item.id} {...item} />;
});

function CardList() {
  return <div className='card-list'>{cardList}</div>;
}

export default CardList;

import katieImg from './images/cards/katie-zaferes.png';
import weddingImg from './images/cards/wedding.png';
import bikeImg from './images/cards/bike.png';

const data = [
  {
    id: 1,
    title: 'Life Lessons with Katie Zaferes',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum mollitia odit doloremque tempora alias, explicabo illum possimus sed nisi ut tempore eveniet obcaecati maxime nesciunt. Nam dolor aliquid atque similique ab est incidunt blanditiis, veritatis eveniet error optio excepturi in adipisci, iusto pariatur facilis. Consequatur natus fuga laboriosam. Suscipit, nesciunt?',
    price: 136,
    coverImg: katieImg,
    stats: {
      rating: 5.0,
      reviewCount: 6,
    },
    location: 'Online',
    openSpots: 0,
  },
  {
    id: 2,
    title: 'Learn Wedding Photography',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum mollitia odit doloremque tempora alias, explicabo illum possimus sed nisi ut tempore eveniet obcaecati maxime nesciunt. Nam dolor aliquid atque similique ab est incidunt blanditiis, veritatis eveniet error optio excepturi in adipisci, iusto pariatur facilis. Consequatur natus fuga laboriosam. Suscipit, nesciunt?',
    price: 125,
    coverImg: weddingImg,
    stats: {
      rating: 5.0,
      reviewCount: 30,
    },
    location: 'Online',
    openSpots: 27,
  },
  {
    id: 3,
    title: 'Group Mountain Biking',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum mollitia odit doloremque tempora alias, explicabo illum possimus sed nisi ut tempore eveniet obcaecati maxime nesciunt. Nam dolor aliquid atque similique ab est incidunt blanditiis, veritatis eveniet error optio excepturi in adipisci, iusto pariatur facilis. Consequatur natus fuga laboriosam. Suscipit, nesciunt?',
    price: 50,
    coverImg: bikeImg,
    stats: {
      rating: 4.8,
      reviewCount: 2,
    },
    location: 'Norway',
    openSpots: 20,
  },
];

export default data;

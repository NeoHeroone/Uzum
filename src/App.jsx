import React from 'react';
import UserCard from './components/UserCard';
import './App.css'

function userId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

const App = () => {
  const data = [
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/ctg2kjdpb7faledbod7g/original.jpg'
    },
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/ctg2kjdpb7faledbod7g/original.jpg'
    },
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/ctg2kjdpb7faledbod7g/original.jpg'
    },
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/ctg2kjdpb7faledbod7g/original.jpg'
    },
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/ctg2kjdpb7faledbod7g/original.jpg'
    },
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/ctg2kjdpb7faledbod7g/original.jpg'
    },
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/ctg2kjdpb7faledbod7g/original.jpg'
    },
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/ctg2kjdpb7faledbod7g/original.jpg'
    },
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/ctg2kjdpb7faledbod7g/original.jpg'
    },
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/ctg2kjdpb7faledbod7g/original.jpg'
    },
  ]


  return (
    <div className='content-box container'>
      <h2 className="title-box">Mashhur &#62;</h2>
      <div className="container-content">
        {data.map((item, index) => (
          <UserCard data={item} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default App;
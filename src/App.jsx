import React from 'react';
import UserCard from './components/UserCard';
import './App.css'
import Navbar from './components/Navbar';
import Korzinka from './components/Korzinka';
import { useState } from 'react';

function userId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

const App = () => {

  const data = [
    {
      id: 1,
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://s3-alpha-sig.figma.com/img/c927/ce24/66ff44d86e8f35fc77d7d997da6ae440?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W-IrtsU-r7VaB1JTyavi8Epq9C~8f03H7PKpayKVuosY~L5~Jz3SNZn~LM0p1QuxAKpw7xN3oGyB2zjU7K5K6Q12Er7DX5n-kZnuinnYXKoqqj9~kCXJwwBIcvBlMmbyEdIAF6QGtV~eD2Csl9uf3Vr-1z~6BnMcHtE78mOKzqqWCwp7a9ypwrq-5igW20oCWtU-ihXl2vXuOUH07YxWma6mDipCeGZBMLzfISgG1tRPaG0-GAJSjOTOd66E6qYUkV~pzRNvWCGSxmFAEYc-RYf6JbserPGpKwqepKRI~taGAuYFm-E~KEswW8GhyIjvvO9rSTUODnWAiS4LUbO9~w__'
    },
    {
      id: 2,
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://s3-alpha-sig.figma.com/img/c927/ce24/66ff44d86e8f35fc77d7d997da6ae440?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W-IrtsU-r7VaB1JTyavi8Epq9C~8f03H7PKpayKVuosY~L5~Jz3SNZn~LM0p1QuxAKpw7xN3oGyB2zjU7K5K6Q12Er7DX5n-kZnuinnYXKoqqj9~kCXJwwBIcvBlMmbyEdIAF6QGtV~eD2Csl9uf3Vr-1z~6BnMcHtE78mOKzqqWCwp7a9ypwrq-5igW20oCWtU-ihXl2vXuOUH07YxWma6mDipCeGZBMLzfISgG1tRPaG0-GAJSjOTOd66E6qYUkV~pzRNvWCGSxmFAEYc-RYf6JbserPGpKwqepKRI~taGAuYFm-E~KEswW8GhyIjvvO9rSTUODnWAiS4LUbO9~w__'
    },
    {
      id: 3,
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://s3-alpha-sig.figma.com/img/c927/ce24/66ff44d86e8f35fc77d7d997da6ae440?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W-IrtsU-r7VaB1JTyavi8Epq9C~8f03H7PKpayKVuosY~L5~Jz3SNZn~LM0p1QuxAKpw7xN3oGyB2zjU7K5K6Q12Er7DX5n-kZnuinnYXKoqqj9~kCXJwwBIcvBlMmbyEdIAF6QGtV~eD2Csl9uf3Vr-1z~6BnMcHtE78mOKzqqWCwp7a9ypwrq-5igW20oCWtU-ihXl2vXuOUH07YxWma6mDipCeGZBMLzfISgG1tRPaG0-GAJSjOTOd66E6qYUkV~pzRNvWCGSxmFAEYc-RYf6JbserPGpKwqepKRI~taGAuYFm-E~KEswW8GhyIjvvO9rSTUODnWAiS4LUbO9~w__'
    },
    {
      id: 4,
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://s3-alpha-sig.figma.com/img/c927/ce24/66ff44d86e8f35fc77d7d997da6ae440?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W-IrtsU-r7VaB1JTyavi8Epq9C~8f03H7PKpayKVuosY~L5~Jz3SNZn~LM0p1QuxAKpw7xN3oGyB2zjU7K5K6Q12Er7DX5n-kZnuinnYXKoqqj9~kCXJwwBIcvBlMmbyEdIAF6QGtV~eD2Csl9uf3Vr-1z~6BnMcHtE78mOKzqqWCwp7a9ypwrq-5igW20oCWtU-ihXl2vXuOUH07YxWma6mDipCeGZBMLzfISgG1tRPaG0-GAJSjOTOd66E6qYUkV~pzRNvWCGSxmFAEYc-RYf6JbserPGpKwqepKRI~taGAuYFm-E~KEswW8GhyIjvvO9rSTUODnWAiS4LUbO9~w__'
    },
    {
      id: 5,
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://s3-alpha-sig.figma.com/img/c927/ce24/66ff44d86e8f35fc77d7d997da6ae440?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W-IrtsU-r7VaB1JTyavi8Epq9C~8f03H7PKpayKVuosY~L5~Jz3SNZn~LM0p1QuxAKpw7xN3oGyB2zjU7K5K6Q12Er7DX5n-kZnuinnYXKoqqj9~kCXJwwBIcvBlMmbyEdIAF6QGtV~eD2Csl9uf3Vr-1z~6BnMcHtE78mOKzqqWCwp7a9ypwrq-5igW20oCWtU-ihXl2vXuOUH07YxWma6mDipCeGZBMLzfISgG1tRPaG0-GAJSjOTOd66E6qYUkV~pzRNvWCGSxmFAEYc-RYf6JbserPGpKwqepKRI~taGAuYFm-E~KEswW8GhyIjvvO9rSTUODnWAiS4LUbO9~w__'
    },
    {
      id: 6,
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://s3-alpha-sig.figma.com/img/c927/ce24/66ff44d86e8f35fc77d7d997da6ae440?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W-IrtsU-r7VaB1JTyavi8Epq9C~8f03H7PKpayKVuosY~L5~Jz3SNZn~LM0p1QuxAKpw7xN3oGyB2zjU7K5K6Q12Er7DX5n-kZnuinnYXKoqqj9~kCXJwwBIcvBlMmbyEdIAF6QGtV~eD2Csl9uf3Vr-1z~6BnMcHtE78mOKzqqWCwp7a9ypwrq-5igW20oCWtU-ihXl2vXuOUH07YxWma6mDipCeGZBMLzfISgG1tRPaG0-GAJSjOTOd66E6qYUkV~pzRNvWCGSxmFAEYc-RYf6JbserPGpKwqepKRI~taGAuYFm-E~KEswW8GhyIjvvO9rSTUODnWAiS4LUbO9~w__'
    },
    {
      id: 7,
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://s3-alpha-sig.figma.com/img/c927/ce24/66ff44d86e8f35fc77d7d997da6ae440?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W-IrtsU-r7VaB1JTyavi8Epq9C~8f03H7PKpayKVuosY~L5~Jz3SNZn~LM0p1QuxAKpw7xN3oGyB2zjU7K5K6Q12Er7DX5n-kZnuinnYXKoqqj9~kCXJwwBIcvBlMmbyEdIAF6QGtV~eD2Csl9uf3Vr-1z~6BnMcHtE78mOKzqqWCwp7a9ypwrq-5igW20oCWtU-ihXl2vXuOUH07YxWma6mDipCeGZBMLzfISgG1tRPaG0-GAJSjOTOd66E6qYUkV~pzRNvWCGSxmFAEYc-RYf6JbserPGpKwqepKRI~taGAuYFm-E~KEswW8GhyIjvvO9rSTUODnWAiS4LUbO9~w__'
    },
    {
      id: 8,
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://s3-alpha-sig.figma.com/img/c927/ce24/66ff44d86e8f35fc77d7d997da6ae440?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W-IrtsU-r7VaB1JTyavi8Epq9C~8f03H7PKpayKVuosY~L5~Jz3SNZn~LM0p1QuxAKpw7xN3oGyB2zjU7K5K6Q12Er7DX5n-kZnuinnYXKoqqj9~kCXJwwBIcvBlMmbyEdIAF6QGtV~eD2Csl9uf3Vr-1z~6BnMcHtE78mOKzqqWCwp7a9ypwrq-5igW20oCWtU-ihXl2vXuOUH07YxWma6mDipCeGZBMLzfISgG1tRPaG0-GAJSjOTOd66E6qYUkV~pzRNvWCGSxmFAEYc-RYf6JbserPGpKwqepKRI~taGAuYFm-E~KEswW8GhyIjvvO9rSTUODnWAiS4LUbO9~w__'
    },
    {
      id: 9,
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://s3-alpha-sig.figma.com/img/c927/ce24/66ff44d86e8f35fc77d7d997da6ae440?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W-IrtsU-r7VaB1JTyavi8Epq9C~8f03H7PKpayKVuosY~L5~Jz3SNZn~LM0p1QuxAKpw7xN3oGyB2zjU7K5K6Q12Er7DX5n-kZnuinnYXKoqqj9~kCXJwwBIcvBlMmbyEdIAF6QGtV~eD2Csl9uf3Vr-1z~6BnMcHtE78mOKzqqWCwp7a9ypwrq-5igW20oCWtU-ihXl2vXuOUH07YxWma6mDipCeGZBMLzfISgG1tRPaG0-GAJSjOTOd66E6qYUkV~pzRNvWCGSxmFAEYc-RYf6JbserPGpKwqepKRI~taGAuYFm-E~KEswW8GhyIjvvO9rSTUODnWAiS4LUbO9~w__'
    },
    {
      id: 10,
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://s3-alpha-sig.figma.com/img/c927/ce24/66ff44d86e8f35fc77d7d997da6ae440?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W-IrtsU-r7VaB1JTyavi8Epq9C~8f03H7PKpayKVuosY~L5~Jz3SNZn~LM0p1QuxAKpw7xN3oGyB2zjU7K5K6Q12Er7DX5n-kZnuinnYXKoqqj9~kCXJwwBIcvBlMmbyEdIAF6QGtV~eD2Csl9uf3Vr-1z~6BnMcHtE78mOKzqqWCwp7a9ypwrq-5igW20oCWtU-ihXl2vXuOUH07YxWma6mDipCeGZBMLzfISgG1tRPaG0-GAJSjOTOd66E6qYUkV~pzRNvWCGSxmFAEYc-RYf6JbserPGpKwqepKRI~taGAuYFm-E~KEswW8GhyIjvvO9rSTUODnWAiS4LUbO9~w__'
    },
  ]


  const [cartState, setCartState] = useState([
    {
      img: 'https://s3-alpha-sig.figma.com/img/c927/ce24/66ff44d86e8f35fc77d7d997da6ae440?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W-IrtsU-r7VaB1JTyavi8Epq9C~8f03H7PKpayKVuosY~L5~Jz3SNZn~LM0p1QuxAKpw7xN3oGyB2zjU7K5K6Q12Er7DX5n-kZnuinnYXKoqqj9~kCXJwwBIcvBlMmbyEdIAF6QGtV~eD2Csl9uf3Vr-1z~6BnMcHtE78mOKzqqWCwp7a9ypwrq-5igW20oCWtU-ihXl2vXuOUH07YxWma6mDipCeGZBMLzfISgG1tRPaG0-GAJSjOTOd66E6qYUkV~pzRNvWCGSxmFAEYc-RYf6JbserPGpKwqepKRI~taGAuYFm-E~KEswW8GhyIjvvO9rSTUODnWAiS4LUbO9~w__',
      nomi: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy`,
      narx: `26 990 so'm`
    }
  ])


  return (
    <>
      <Navbar />
      <div className='content-box container'>
        <h2 className="title-box">Mashhur &#62;</h2>
        <div className="container-content">
          {data.map((item, index) => (
            <UserCard cartState={cartState} setCartState={setCartState} data={item} key={index} />
          ))}
        </div>
      </div>
      <Korzinka cartState={cartState} setCartState={setCartState} />
    </>
  );
}

export default App;
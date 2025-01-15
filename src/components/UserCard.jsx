import React, { useState } from "react";

const UserCard = ({ data, cartState, setCartState }) => {
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState("/liked.svg")

  function increment() {
    setNumber((prevNumber) => prevNumber + 1);
    const newArr = cartState.concat([{
      nomi: data.desc,
      narx: data.narx,
      img: data.img
    }])
    setCartState(newArr)
  }

  function decrement() {
    setNumber((prevNumber) => (prevNumber > 0 ? prevNumber - 1 : 0));
    const new__Arr = cartState.filter((item)=>{
      item.id !== data.id
    })
    setCartState(new__Arr)
  }

  function change() {
    setColor((color) => (color === "/liked.svg" ? "/like.svg" : "/liked.svg"));
  }

  return (
    <div key={data.id} className='cards-content'>
      <img src={data.img} alt={data.desc} className='product' />
      <div className="product-content">
        <h3 className="description">{data.desc}</h3>
        <div className="sharh-content">
          <img src="sharh.svg" alt="Sharhlar" />
          <p className="sharh-ball">{data.ball}</p>
        </div>
        <span className="bolb-tolaw">{data.bolbt}</span>
        <div className="narxlar-content">
          <div className="narxlar">
            <span className="skidka">{data.skidka || ''}</span>
            <p className="narx">{data.narx}</p>
          </div>
          <div className="savatcha">
            <button onClick={decrement}>-</button>
            <p>{number}</p>
            <button onClick={increment}>+</button>
          </div>
        </div>
      </div>
      <div className="like-content">
        <img src={color} onClick={change} alt="" className="svg" />
      </div>
    </div>
  );
}


export default UserCard;
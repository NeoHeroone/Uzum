import React from 'react';
import KorzinkaBox from './KorzinkaBox';

const Korzinka = ({cartState, setCartState}) => {
  return (
    <div className="korzinka">
      <div className="container">
        <div className="korzinka-boxes">
          {cartState.map((item, index) => {
            return (
              <KorzinkaBox key={index} nomi={item.nomi} narx={item.narx} img={item.img}/>
            )
          })}
          <div className="korzina-btns">
            <button className='korzina-btn' onClick={()=>{
              return setCartState([])
            }}>Tozalash</button>
            <button className='korzina-btn'>Umumiy: <span>{cartState.length}</span> ta</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Korzinka;
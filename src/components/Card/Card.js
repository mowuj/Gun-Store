import React from 'react';
import './Card.css'
import {BsFillCartPlusFill} from "react-icons/bs"
const Card = ({gunData,handleAddToCart}) => {
    const {name,img,bullet,capacity,action,price} =gunData;
    
    return (
        <div className='card'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <div className='gun-info'>
                <h1>{name}</h1>
            <p>Bullet Type: {bullet}</p>
            <p>Capacity : {capacity}</p>
            <p>Action : {action}</p>
            </div>
            <div className='add-to-cart'>
                <button onClick={()=>handleAddToCart(gunData)}><BsFillCartPlusFill className=''></BsFillCartPlusFill></button>
                <h1>$ { price}</h1>
            </div>
        </div>
    );
};

export default Card;
import React from 'react';
import vanillaImg from '../assets/vanilla_cake.jpg'
import chocolateImg from '../assets/chocolate_cake.jpg'
import strawberryImg from '../assets/strawberry_cake.jpg'
import caramelImg from '../assets/caramel_cake.jpg'
import lemonImg from '../assets/lemon_cake.jpg'
import muffinImg from '../assets/mystery_muffin.webp'
import blueberryImg from '../assets/blueberry_tart.jpg'
import matchaImg from '../assets/matcha_roll.jpg'
import lavenderImg from '../assets/lavender_cheesecake.jpg'


const menuItems = [
   { name: 'Vanilla Dream', price: '₾6.75', img: vanillaImg },
  { name: 'Chocolate Bliss', price: '₾8.10', img: chocolateImg },
  { name: 'Strawberry Shortie', price: '₾7.45', img: strawberryImg },
  { name: 'Caramel Crunch', price: '₾8.80', img: caramelImg },
  { name: 'Lemon Zest', price: '₾7.70', img: lemonImg },
  { name: 'Mystery Muffin', price: '₾5.80', img: muffinImg },
  { name: 'Blueberry Love', price: '₾8.40', img: blueberryImg },
  { name: 'Matcha Magic', price: '₾9.20', img: matchaImg },
  { name: 'Lavender Cheesecake', price: '₾11.20', img: lavenderImg },
];

const Menu = () => {
  return (
    <div className="page">
      <h1 className="menu-title">Our Menu</h1>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-block">
            {item.img ? (
  <img src={item.img} alt={item.name} className="menu-img" />
) : (
  <div className="menu-img-placeholder">[IMG]</div>
)}
            <div className="menu-name">{item.name}</div>
            <div className="menu-price">{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

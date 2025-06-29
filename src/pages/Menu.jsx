import React from 'react';
import useDesserts from '../hooks/useDesserts';


const Menu = () => {
  const { desserts, loading, error } = useDesserts();

  if (loading) return <p className="menu-status">Loading...</p>;
  if (error) return <p className="menu-status">Error: {error}</p>;

  return (
    <div className="page">
      <h1 className="menu-title">Our Menu</h1>
      <div className="menu-grid">
        {desserts.map((item) => (
          <div key={item.id} className="menu-block">
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
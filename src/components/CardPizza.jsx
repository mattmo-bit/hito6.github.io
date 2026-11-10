import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card" style={{ width: '300px', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', background: '#fff' }}>
      <img src={img} alt={name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '15px' }}>
        <h3>{name}</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
          <span style={{ fontWeight: 'bold' }}>Precio: ${price.toLocaleString('es-CL')}</span>
          <button 
            onClick={() => addToCart({ id, name, price, img })} // 👈 Envía el id correcto de esta tarjeta
            style={{ background: '#1a1a1a', color: '#fff', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' }}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity, total } = useContext(CartContext);

  return (
    <div style={{ padding: '30px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Detalles del pedido:</h2>
      {cart.length === 0 ? (
        <p style={{ marginTop: '20px', color: '#666' }}>Tu carrito está vacío 🛒</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', padding: '15px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <img src={item.img} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '6px' }} />
                <span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>{item.name}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ color: '#28a745', fontWeight: 'bold' }}>${(item.price * item.count).toLocaleString('es-CL')}</span>
                <button onClick={() => decrementQuantity(item.id)} style={{ background: '#dc3545', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>-</button>
                <span>{item.count}</span>
                <button onClick={() => incrementQuantity(item.id)} style={{ background: '#007bff', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>+</button>
              </div>
            </div>
          ))}
          <h3 style={{ marginTop: '30px' }}>Total: ${total.toLocaleString('es-CL')}</h3>
          <button style={{ background: '#28a745', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', fontSize: '1rem', cursor: 'pointer', marginTop: '15px' }}>
            Ir a Pagar 💳
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
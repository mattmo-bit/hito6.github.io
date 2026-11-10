import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const consultarApi = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error al cargar las pizzas:", error);
    }
  };

  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <main className="home-main">
      <Header />
      <div className="cards-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>

      {pizzas.map((pizza) => (
  <CardPizza
    key={pizza.id}         // 👈 Clave única obligatoria en React
    id={pizza.id}          // 👈 Asegúrate de pasar el id explícitamente
    name={pizza.name}
    price={pizza.price}
    ingredients={pizza.ingredients}
    img={pizza.img}
  />
      ))}
      </div>
    </main>
  );
};

export default Home;
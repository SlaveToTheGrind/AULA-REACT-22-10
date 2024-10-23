import React from 'react';
import './App.css';

const products = [
  {
    id: 1,
    title: "Smartphone",
    price: "R$ 1.500,00",
    image: "https://i.zst.com.br/thumbs/12/1c/1b/-978814202.jpg"
  },
  {
    id: 2,
    title: "Laptop",
    price: "R$ 3.200,00",
    image: "https://www.asus.com/media/Odin/Websites/global/Series/9.png"
  },
  {
    id: 3,
    title: "Fone de Ouvido",
    price: "R$ 200,00",
    image: "https://img.freepik.com/psd-gratuitas/levitando-fones-de-ouvido-ainda-vida_23-2150806982.jpg?semt=ais_hybrid"
  }
];

function App() {
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


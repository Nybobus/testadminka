import React from "react";
import "./Catalog.scss";

const Catalog = () => {
  const products = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 12.99 },
    { id: 3, name: "Product 3", price: 15.99 },
  ];

  return (
    <section>
      <div className="container">
        <h2>CATALOG</h2>

        <div className="wrap">
          {products.map((product) => (
            <div key={product.id} className="product">
              <h3>{product.name}</h3>
              <p>Price: ${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;

// Code in English
import { useState } from 'react';

interface Product {
  title: string;
  price: string;
}

const productList = [
  {
    title: 'Pasta',
    price: 'R$ 25,00',
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00',
  },
];

export function ListProducts() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  function searchProduct(search: string) {
    const newFilteredProducts = productList.filter((product) =>
      product.title.includes(search)
    );

    setFilteredProducts(newFilteredProducts);
  }

  return (
    <div>
      <input type="text" onChange={(e) => searchProduct(e.target.value)} />

      {filteredProducts.map((product) => (
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

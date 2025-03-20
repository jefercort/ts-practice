import { addProduct, calcStock, products } from "./product.servicio";


addProduct({
  title: "T-shirt",
  createdAt: new Date(),
  size: "M",
  stock: 100
});

addProduct({
  title: "Pants",
  createdAt: new Date(),
  size: "L",
  stock: 100
});

console.log(products);

const total = calcStock();

console.log(total);

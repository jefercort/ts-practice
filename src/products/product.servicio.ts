import { Product } from "./product.model";

export const products: Product[] = []; // Esta es la forma correcta de hacerlo

export const addProduct = (data: Product) => {
  products.push(data);
};

export const calcStock = (): number => {
  let total = 0;
  products.forEach((item) => {
    total += item.stock? item.stock : 0;
  });
  return total;
};

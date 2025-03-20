// para definir una estructura como un objeto en TypeScript, se puede hacer de la siguiente manera:
(() => {
  // aca podemos tener un tipod especial para producto que se puede usar en cualquier parte del codigo
  type Product = {
    title: string,
    createdAt: Date,
    size: Sizes,
    stock?: number
  };
  type Sizes = "S" | "M" | "L";

  const products: Product[] = []; // Esta es la forma correcta de hacerlo

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: "T-shirt",
    createdAt: new Date(),
    size: "M",
  });

  addProduct({
    title: "Pants",
    createdAt: new Date(),
    size: "L",
    stock: 100
  });

  products.push({
    title: "T-shirt",
    createdAt: new Date(),
    size: "M",
    stock: 100
  });

  console.log(products);

}) ();

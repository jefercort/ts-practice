// la forma de parametrizar una funcion para que reciba un objeto como parametro es la siguiente:
(() => {
  const login = (data: {email: string, pass: number}) => {
    console.log(data.email, data.pass);
  };

  login({
    email: "kevin@kevin.com",
    pass: 457845
  });

  type Sizes = "S" | "M" | "L";

  const products: any[] = []; // solo por esta vez pero no es la forma profesional de hacerlo

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    size: Sizes,
    // aca con el signo de interrogacion le decimos que este parametro es opcional
    stock?: number
  }) => {
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

  console.log(products);
}) ();

// la forma de usar las funciones con typescript es muy similar a JavaScript,
// pero con la ventaja de que podemos definir los tipos de datos de los parámetros y del valor de retorno de la función.
(() => {
  type Sizes = "S" | "M" | "L";

  function createProductToJson(
    title: string,
    createdAt: Date,
    size: Sizes,
    stock: number
  ) {
    return {
      title,
      createdAt,
      size,
      stock,
    };
  };

  const product1 = createProductToJson("T-shirt", new Date(), "M", 10);
  console.log(product1);
  console.log(product1.createdAt.toISOString());
  console.log(product1.size);
  console.log(product1.stock);
  console.log(product1.title);

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    size: Sizes,
    // aca con el signo de interrogacion le decimos que este parametro es opcional
    stock?: number
  ) => {
    return {
      title,
      createdAt,
      size,
      stock,
    };
  };

  // en esta parte ya no presenta error al no recibir todos los cuatro parametros ya que con el signo de interrogacion se le dice que es opcional
  const product2 = createProductToJsonV2("T-shirt", new Date(), "M");

  console.log(product2);
  console.log(product2.createdAt.toISOString());
  console.log(product2.size);
  console.log(product2.stock); // undefined
  console.log(product2.title);
}) ();

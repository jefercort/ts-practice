(() => {
  // cuando no ponemos nada se llama modo inferido
  let prices = [100, 200, 300, "Hola", true];
  prices.push(400);

  // Pasa que en ocaciones si el valor inicial es un string con boobleano pero mas adelante se agrega numero si se debe
  // volver explicito el array, por ejemplo si quisiera agregar un numero a este array no seria posible
  let products = ["Laptop", true];
  products.push("Smartphone");

  // cuando ponemos la especificacion de lo que va a recibir el array es Explicito
  let mixed: (string | number | boolean | object)[] = ["Television", true];
  mixed.push(100);

}) ();

(() => {

  let productPrice = 100;
  productPrice = 12;
  console.log(productPrice);

  let costumerAge: number = 20;
  // costumerAge = costumerAge + "1"; Esto esta mal porque costumerAge es un number y no se puede sumar con un string
  costumerAge = costumerAge + 1;

  // este ejemplo es para el caso que queramos inicializar una variable sin numero y solo con el tipo de dato
  let productStock: number;
  console.log(productStock); // esto va a dar undefined
  if (productStock > 10) {
    console.log("Hay stock");
  }

  // para el caso que se usen funciones que transforman de texto a numero no hay problema
  let discount = parseInt("25");
  console.log(discount);
  if (discount > 10) {
    console.log("Tiene descuento");
  } else {
    console.log("No tiene descuento");
  }

  let hex = 0xf00d;
  console.log(hex);
  let bin = 0b1010; // 10
  console.log(bin);
}) ();

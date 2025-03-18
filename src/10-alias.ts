// La palabra Type es una palabra reservada de TypeScript para crear nuestros nuevos tipos de datos.
// Con ella podemos crear alias para nuestros tipos de datos, lo que nos permite reutilizarlos en diferentes partes de nuestro código.
(() => {
  type UserID = string | number;
  let userId: UserID;

  // Literal Types
  // los literal types son una forma de definir un tipo de dato que puede ser un valor concreto.
  type Sizes = "S" | "M" | "L";
  let shirtSizes: Sizes;
  shirtSizes = "S";
  shirtSizes = "M";
  shirtSizes = "L";
  // shirtSizes = "XasdasdS"; // Error

  function greeting(myText: UserID, shirtSizes: Sizes) {
    if (typeof myText === "string") {
      console.log(`Hello ${myText.toUpperCase()}`);
    } else {
      console.log(`Hello user with ID: ${myText.toFixed(2)} and your shirt size is ${shirtSizes}`);
    }
  }

  greeting("John Doe", "S");
  greeting(27.578777, "L");

}) ();

// Los Union Types son una forma de poder definir un tipo de dato que puede ser de varios tipos diferentes.
// Para definir un Union Type se utiliza el símbolo de pipe (|) entre los tipos de datos que se quieren unir.
(() => {
  let userId: string | number;
  userId = 12345;
  userId = "Kevin Smith";

  function greeting(myText: string | number) {
    if (typeof myText === "string") {
      console.log(`Hello ${myText.toUpperCase()}`);
    } else {
      console.log(`Hello user with ID: ${myText.toFixed(2)}`);
    }
  }

  greeting("John Doe");
  greeting(27.578777);
}) ();

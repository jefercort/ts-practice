// La forma de manejar los undefined y los null en TypeScript es un poco diferente a JavaScript.
// En TypeScript, ambos valores tienen sus propios tipos, undefined y null respectivamente.
// Por defecto, los tipos de datos en TypeScript son nullables, lo que significa que pueden tener valores nulos o indefinidos.
// Para deshabilitar esta característica, podemos usar la bandera --strictNullChecks en el archivo tsconfig.json.

(() => {
  let myNumber: number | null = null;
  myNumber = 10;

  let myString: string | undefined = undefined;
  myString = "Hello World";

  function greeting(name: string | null) {
    let hello = "Hello ";
    if (name) {
      hello += name.toUpperCase();
    } else {
      hello += "to nobody";
    }
    console.log(hello);
  }

  function greetingV2(name: string | null) {
    let hello = "Hello ";
    hello += name?.toUpperCase() || "nobody";
    console.log(hello);
  }

  greeting("kevin");
  greeting(null);

  greetingV2("sandra");
  greetingV2(null);

}) ();

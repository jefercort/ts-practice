// El uso de any es una forma de decirle a TypeScript que no se preocupe por el tipo de dato que se le asigna a una variable, ya que puede ser cualquier cosa.
// Aunque es útil en ciertas situaciones, se recomienda evitar su uso en la medida de lo posible, ya que se pierden las ventajas de TypeScript al no especificar
// el tipo de dato de una variable. En su lugar, se recomienda utilizar tipos de datos más específicos, como string, number, boolean, object, etc.
(() => {
  let myDinamicVar: any = 100;
  myDinamicVar = "Hello";
  myDinamicVar = true;
  myDinamicVar = { name: "John", age: 30 };
  myDinamicVar = ["Laptop", "Smartphone", "Tablet"];
  myDinamicVar = 100;

  // una forma de tener en cuenta el any es usando un CAST para que no genere error
  myDinamicVar = "Kevin";
  // esta es una forma de hacer cast
  const respuesta = (myDinamicVar as string).toUpperCase();
  console.log(respuesta);

  myDinamicVar = 1895;
  // otra forma de hacer cast
  const respuesta2 = (<number>myDinamicVar).toFixed(2);
  console.log(respuesta2);
}) ();

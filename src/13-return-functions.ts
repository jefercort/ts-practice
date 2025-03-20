// para el retorno de funciones en TypeScript, con el siguiente snippet:
// la forma de usar las funciones con typescript es muy similar a JavaScript, pero con la ventaja de que podemos definir
// los tipos de datos de los parámetros y del valor de retorno de la función.
// en este caso se define el tipo de dato de retorno de la función, en este caso es un string
(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((price) => {
      total += price;
    });
    return total.toString();
  };

  const rta = calcTotal([100, 200, 300, 400, 500]);
  console.log(rta);

  // cuando la funcion no retorna nada se le puede definir el tipo de retorno como void
  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log (`El total es: ${rta}`);
    // return rta; // no se puede retornar nada en una funcion que tiene definido el tipo de retorno como void
  };

  printTotal([14800, 24700, 33300, 40000, 50000]);
}) ();

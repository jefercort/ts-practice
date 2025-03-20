// Aca se empieza a utilizar modulos, para poder exportar e importar las estructuras de datos
// de un archivo a otro, en este caso se exporta la estructura de datos Product y Sizes

export type Product = {
  title: string,
  createdAt: Date,
  size: Sizes,
  stock?: number
};
export type Sizes = "S" | "M" | "L";

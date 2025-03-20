// var _ = require('lodash'); // para convertir este require a un import, se debe tener en cuenta que se debe puede agregar una libreria de tipo @types/lodash
// para que TypeScript pueda reconocer la libreria lodash y no genere errores, para ello se instala esa libreria con npm install @types/lodash

import _ from "lodash";

const data = [
  {
    userName: "Kevin",
    role: "Admin",
  },
  {
    userName: "John",
    role: "Seller",
  },
  {
    userName: "Camila",
    role: "Seller",
  },
  {
    userName: "Jane",
    role: "Customer",
  },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);

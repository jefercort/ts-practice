import { format, subDays } from "date-fns";

const date = new Date(2025, 2, 20); // enero = 0 , febrero = 1, marzo = 2, etc
const rta = subDays(date, 10);
const stringDate = format(rta, "dd/MM/yyyy");

console.log("La fecha es", stringDate);

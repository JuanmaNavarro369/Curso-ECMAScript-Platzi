import fetch from "node-fetch";

const respuesta = await fetch("https://api.escuelajs.co/api/v1/products")
const products = await respuesta.json();

export { products };
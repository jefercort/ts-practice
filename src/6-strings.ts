(() => {
  let nameProduct = "Laptop";
  nameProduct = "Smartphone";
  console.log('nameProduct', nameProduct);

  let productDescription: string = "This is a laptop";
  let price = 1000;
  let isNew = true;

  const summary = `
    title: ${nameProduct}
    description: ${productDescription}
    price: ${price}
    new: ${isNew}
  `;

  console.log('summary', summary);

}) ();

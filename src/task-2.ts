interface Product {
  readonly id: Number;
  title: String;
  description?: String;
}

const product: Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

console.log(`Product: ${JSON.Stringify(product)}`);

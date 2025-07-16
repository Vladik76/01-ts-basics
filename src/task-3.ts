interface Product {
  readonly id: Number;
  title: String;
  description?: String;
}

const usernames: String[] = ["alice", "bob", "charlie"];

const ratings: Number[] = [4.5, 3.8, 5];

const products: Product[] = [
  { id: 1, title: "Phone" },
  { id: 2, title: "Laptop" },
];

console.log(`Usernames: ${JSON.Stringify(usernames)}`);
console.log(`Ratings: ${JSON.Stringify(ratings)}`);
console.log(`Products: ${JSON.Stringify(products)}`);

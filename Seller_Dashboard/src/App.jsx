import { useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);

  function addProduct(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const fields = new FormData(form);

    const product = {
      name: fields.get("name"),
      quantity: fields.get("quantity"),
      price: fields.get("price"),
      description: fields.get("description"),
    };

    setProducts([...products, product]);
    form.reset();
  }

  return (
    <main style={{ backgroundColor: "white", color: "black", padding: 16, minHeight: "100vh", colorScheme: "light" }}>
      <h1>Seller Dashboard</h1>

      <form onSubmit={addProduct}>
        <p>
          <label htmlFor="name">Product name</label><br />
          <input id="name" name="name" required />
        </p>

        <p>
          <label htmlFor="quantity">Quantity</label><br />
          <input id="quantity" name="quantity" type="number" min="0" required />
        </p>

        <p>
          <label htmlFor="price">Price</label><br />
          <input id="price" name="price" type="number" min="0" step="50" required />
        </p>

        <p>
          <label htmlFor="description">Description</label><br />
          <textarea id="description" name="description" required />
        </p>

        <button type="submit">Add</button>
      </form>

      <h2>Products</h2>
      <table style={{ borderCollapse: "collapse" }} border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Product name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

import { useState } from "react";
import ShoppingItem from "./ShoppingItem";
import "./index.css";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function addItem(event) {
    event.preventDefault();

    if (!name.trim() || price === "" || Number(price) < 0) {
      alert("Введите название и корректную цену");
      return;
    }

    const newItem = {
      id: crypto.randomUUID(),
      name: name.trim(),
      price: Number(price),
    };

    setItems([...items, newItem]);
    setName("");
    setPrice("");
  }

  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  const total = items.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <main className="app">
      <div className="shopping-card">
        <h1>🛒 Мой список покупок</h1>
        <p className="subtitle">
          Добавляй товары и следи за расходами
        </p>

        <form onSubmit={addItem}>
          <label>Название товара</label>
          <input
            type="text"
            placeholder="Например, молоко"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label>Цена в сомах</label>
          <input
            type="number"
            min="0"
            step="0.01"
            placeholder="Например, 85"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />

          <button className="add-button" type="submit">
            + Добавить товар
          </button>
        </form>

        <h2>Список товаров ({items.length})</h2>

        {items.length === 0 ? (
          <p className="empty">Список пока пуст. Добавь первый товар!</p>
        ) : (
          items.map((item) => (
            <ShoppingItem
              key={item.id}
              item={item}
              onDelete={deleteItem}
            />
          ))
        )}

        <div className="total">
          <span>Общая стоимость:</span>
          <strong>{total.toFixed(2)} сом</strong>
        </div>
      </div>
    </main>
  );
}

export default App;
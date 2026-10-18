function ShoppingItem({ item, onDelete }) {
  return (
    <div className="shopping-item">
      <div>
        <h3>{item.name}</h3>
        <p>{item.price.toFixed(2)} сом</p>
      </div>

      <button
        className="delete-button"
        onClick={() => onDelete(item.id)}
      >
        Удалить
      </button>
    </div>
  );
}

export default ShoppingItem;
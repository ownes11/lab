// Component combines fragment, list and summary
function CombinedFragment() {
  const items = ["Apple", "Banana", "Cherry"];

  return (
    <>
      <h2>Fruits</h2>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p>Total: {items.length} items</p>
    </>
  );
}

export default CombinedFragment;
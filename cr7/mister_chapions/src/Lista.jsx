function Lista({ items }) {
  return (
    <div>
      <h2>Lista de elementos</h2>
      {items.length === 0 ? (
        <p>No hay elementos guardados.</p>
      ) : (
        <ul>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Lista;
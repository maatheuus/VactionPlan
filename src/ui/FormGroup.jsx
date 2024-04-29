function FormGroup({ label, error, children }) {
  return (
    <form className="form">
      {label && <label htmlFor={children}>{label}</label>}
      {children}
      {error && <p>{error}</p>}
    </form>
  );
}

export default FormGroup;

function FormRow({ label, error, children }) {
  return (
    <div className="grid items-center gap-2 py-1 grid-cols-1 sm:grid-cols-3 small:py-3">
      {label && (
        <label
          htmlFor={children.props.id}
          className="text-base font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}
      {children}
      {error && <p className="text-red-600 font-medium">{error}</p>}
    </div>
  );
}

export default FormRow;

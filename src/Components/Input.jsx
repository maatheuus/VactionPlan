function Input({ type, className, label, ...props }) {
  return (
    <>
      <label className={className}>{label}</label>
      <input type={type} {...props} />
    </>
  );
}

export default Input;

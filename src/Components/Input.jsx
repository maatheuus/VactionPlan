function Input({ type, className, children, label, ...props }) {
  return (
    <>
      <label className={className}>{label}</label>
      {type === "textarea" ? (
        <textarea {...props}>{children}</textarea>
      ) : (
        <input type={type} {...props} />
      )}
    </>
  );
}

export default Input;

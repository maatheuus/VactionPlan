function Input({ type, className, children, label, innerRef, ...props }) {
  return (
    <>
      <label className={className}>{label}</label>
      {type === "textarea" ? (
        <textarea ref={innerRef} {...props}>
          {children}
        </textarea>
      ) : (
        <input type={type} {...props} ref={innerRef} />
      )}
    </>
  );
}

export default Input;

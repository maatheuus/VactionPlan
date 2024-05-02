import { Link } from "react-router-dom";

export default function Button({ type = "button", to, children, ...props }) {
  if (to) {
    return (
      <Link to={to} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} {...props} style={{ cursor: "pointer" }}>
      {children}
    </button>
  );
}

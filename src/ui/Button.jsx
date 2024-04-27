import { Link } from "react-router-dom";

export default function Button({ to, children, ...props }) {
  if (to) {
    return <Link to={to}>{children}</Link>;
  }

  return (
    <button type="button" {...props} style={{ cursor: "pointer" }}>
      {children}
    </button>
  );
}

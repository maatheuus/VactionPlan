import { Link } from "react-router-dom";

function ButtonIcon({ label, to, children, icon, ...props }) {
  if (to) {
    return <Link to={to}>{children}</Link>;
  }
  return (
    <button className="button-icon" {...props}>
      {icon}
      {label && <span>{label}</span>}
    </button>
  );
}

export default ButtonIcon;

import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function ButtonIcon({ to, type, className, children, ...props }) {
  const base =
    "flex flex-1 justify-center gap-2 order-first rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-black hover:bg-gray-300";

  const styles = {
    primary: base,
    secondary:
      base +
      " flex-0 justify-start w-full bg-transparent text-zinc-300 hover:text-zinc-50 hover:bg-transparent transition-all px-0",
  };

  if (to)
    return (
      <Link to={to} className={twMerge(styles[type], className)} {...props}>
        {children}
      </Link>
    );

  return (
    <button className={twMerge(styles[type], className)} {...props}>
      {children}
    </button>
  );
}

export default ButtonIcon;

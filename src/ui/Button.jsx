import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function Button({
  disabled,
  className,
  to,
  variation,
  children,
  ...props
}) {
  const base =
    "flex flex-1 justify-center items-center rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-md hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 transition-colors";

  const styles = {
    primary: base,
    secondary:
      base +
      " py-1 px-4 rounded-lg bg-transparent hover:bg-zinc-200 hover:text-black ",
    danger: base + " bg-red-600 hover:bg-red-700 text-red-50 ",
    approve: base + " bg-green-600 hover:bg-green-700 text-green-50",
  };

  if (to)
    return (
      <Link
        to={to}
        className={twMerge(styles[variation], className)}
        {...props}
      >
        {children}
      </Link>
    );

  return (
    <button
      disabled={disabled}
      className={twMerge(styles[variation], className)}
      {...props}
    >
      {children}
    </button>
  );
}

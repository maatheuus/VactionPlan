export function useAnimatePages() {
  const variants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, bounce: 0, type: "spring" },
    },
  };
  const initial = "hidden";
  const animate = "visible";
  const exit = "hidden";
  return { initial, animate, exit, variants };
}

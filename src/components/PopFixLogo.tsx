export function PopFixLogo({
  className = "",
  solid = true,
}: {
  className?: string;
  solid?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-baseline font-display font-bold tracking-[-0.03em] ${className}`}
    >
      <span className={`pop-mark ${solid ? "text-pop-black" : "text-white"}`}>POP</span>
      <span className="text-pop-red">.</span>
      <span className={`pop-mark ${solid ? "text-pop-black" : "text-white"}`}>FIX</span>
    </span>
  );
}

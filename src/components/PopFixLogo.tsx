export function PopFixLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline font-display font-black tracking-[-0.04em] uppercase ${className}`}>
      <span className="text-pop-off">POP</span>
      <span className="text-pop-red">'</span>
      <span className="text-pop-off">FIX</span>
    </span>
  );
}

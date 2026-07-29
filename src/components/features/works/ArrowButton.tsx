type ArrowButtonProps = {
  direction: "left" | "right";
  onClick: (e: React.MouseEvent) => void;
  disabled?: boolean;
  "aria-label": string;
  className?: string;
};

const PATHS = {
  left: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z",
  right:
    "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
};

export default function ArrowButton({
  direction,
  onClick,
  disabled,
  className = "",
  ...rest
}: ArrowButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center rounded-full transition disabled:opacity-30 disabled:pointer-events-none ${className}`}
      {...rest}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path fillRule="evenodd" d={PATHS[direction]} clipRule="evenodd" />
      </svg>
    </button>
  );
}

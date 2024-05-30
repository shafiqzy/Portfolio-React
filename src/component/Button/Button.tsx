interface ButtonProps {
  onClick: () => void;
  label: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  frontIcon?: string;
  backIcon?: string;
}

// eslint-disable-next-line no-empty-pattern
const Button = ({
  onClick,
  label,
  type = "button",
  className = "",
  disabled = false,
  frontIcon,
  backIcon,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
      bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border rounded items-center flex text-center justify-between 
     ${className}`}
      disabled={disabled}
    >
      {frontIcon && <img src={frontIcon} alt="Front Icon" />}

      <span>{label}</span>
      {backIcon && <img src={backIcon} alt="Back Icon" />}
    </button>
  );
};

export default Button;

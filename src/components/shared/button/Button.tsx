import { ReactNode } from "react";

export type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "inline";
  ariaLabel?: string;
};

export function Button({
  onClick,
  children,
  disabled = false,
  type = "button",
  variant = "primary",
  ariaLabel,
}: ButtonProps) {
  const variantClass = {
    primary: "bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700",
    secondary: "bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700",
    outline:
      "border-2 border-blue-500 text-blue-500 py-2 px-4 rounded hover:bg-blue-500 hover:text-white",
    inline: "text-blue-500 underline hover:text-blue-700",
  }[variant];

  return (
    <button
      className={`${variantClass} p-2`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

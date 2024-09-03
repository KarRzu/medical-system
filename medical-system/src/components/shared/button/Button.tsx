import { ReactNode } from "react";

export type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
};

export function Button({ onClick, children }: ButtonProps) {
  return (
    <>
      <button
        className="p-2 bg-custom-viollet text-custom-white rounded-2xl"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

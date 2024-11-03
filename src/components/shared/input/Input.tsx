import React from "react";

export type InputProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  list?: string;
  rest?: unknown;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type = "text",
      placeholder,
      required = false,
      disabled = false,
      ...rest
    },
    ref
  ) => {
    return (
      <>
        {label && <label className="block mb-1">{label}</label>}
        <input
          ref={ref}
          className="border-2 rounded-lg w-96 p-2"
          type={type}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          {...rest}
        />
      </>
    );
  }
);

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
          className="border w-full p-2 mt-1 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent"
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

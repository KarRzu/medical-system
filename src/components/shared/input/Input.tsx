export type InputProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  list?: string;
};

export function Input({
  label,
  type,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  ...rest
}: InputProps) {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input
        className="border-2 rounded-lg w-96 p-2"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        {...rest}
      />
    </>
  );
}

export type ErrorsProps = {
  message?: string;
};

export function Errors({ message }: ErrorsProps) {
  if (!message) {
    return null;
  }
  return (
    <>
      <span className="text-red-500">{message}</span>
    </>
  );
}

import { ChangeEvent, memo } from "react";

export interface InputProps {
  value: string;
  handleChange: (e: ChangeEvent<any>) => void;
  name: string;
  placeholder: string;
  textarea?: boolean;
}

const style =
  "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium";

const Input = memo(
  ({ name, value, placeholder, handleChange, textarea }: InputProps) => (
    <>
      {!textarea ? (
        <input
          type={name !== "email" ? "text" : "email"}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`${style}`}
        />
      ) : (
        <textarea
          rows={7}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`${style}`}
        />
      )}
    </>
  )
);

export default Input;

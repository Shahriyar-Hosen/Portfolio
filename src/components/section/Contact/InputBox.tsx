import { memo } from "react";
import Input, { InputProps } from "./Input";

interface InputBoxProps extends InputProps {}

const InputBox = memo(
  ({ name, placeholder, value, handleChange, textarea }: InputBoxProps) => (
    <label className="flex flex-col">
      <span className="text-white font-medium mb-4 ">
        Your <span className="capitalize">{name} </span>
      </span>
      <Input
        name={name}
        placeholder={placeholder}
        value={value}
        handleChange={handleChange}
        textarea={textarea}
      />
    </label>
  )
);

export default InputBox;

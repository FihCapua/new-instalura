import React from "react";
import { Input, InputWrapper } from "./style";

export type TextFieldProps = {
  type?: string;
  name?: string;
  placeholder: string;
  value?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: any;
};

export function TextField({
  type,
  name,
  placeholder,
  value,
  onChange,
}: TextFieldProps) {
  return (
    <InputWrapper>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
}

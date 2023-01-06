import React from "react";
type Props = {
  name?: string;
  value?: any;
  onChange?: (name: string, value: any) => void;
};

export const Input: React.FunctionComponent<Props> = ({
  value,
  name,
  onChange
}) => {
  return (
    <>
      <input
        value={value}
        name={name}
        id={name}
        onChange={(e) => {
          if (name) onChange?.(name, e.target.value);
        }}
      />
    </>
  );
};

Input.displayName = "input";

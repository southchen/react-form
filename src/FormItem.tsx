import React, { ReactElement } from "react";

type ReactChildType = {
  type: {
    displayName: string;
  };
} & ReactElement;

type Props = {
  name: string;
  label: string;
  children: ReactChildType;
  value?: any;
  onChange?: (name: string, value: any) => void;
};

export const FormItem: React.FunctionComponent<Props> = ({
  children,
  value,
  onChange,
  name,
  label
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {React.isValidElement(children) && children.type.displayName === "input"
        ? React.cloneElement(children, { onChange, value, name, label })
        : null}
    </div>
  );
};

FormItem.displayName = "formItem";

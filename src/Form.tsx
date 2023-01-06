import React, { ReactElement } from "react";

type Data = Record<string, any>;

export type Ref = {
  submit: (cb: any) => void;
  reset: () => void;
  getFieldsValue: (name: string) => any;
  setFieldValue: (name: string, value: any) => void;
};

type Props = {
  children: any;
};

export const Form = React.forwardRef<Ref, Props>((props, ref) => {
  const [data, setData] = React.useState<Data>({});
  const onChange = (name: string, value: any) => {
    setData((d) => ({ ...data, [name]: value }));
  };

  const childList: ReactElement[] = [];
  React.Children.forEach(props.children, (child) => {
    if (child.type.displayName === "formItem") {
      childList.push(child);
    }
  });

  React.useImperativeHandle(ref, () => {
    return {
      submit: (cb) => {
        cb(data);
      },
      reset: () => {
        console.log("reseting");
        setData({});
      },
      getFieldsValue: (name) => {
        return data[name];
      },
      setFieldValue: (name, value) => {
        setData((d) => ({ ...d, [name]: value }));
      }
    };
  });

  return (
    <>
      {childList.map((item) => {
        return React.cloneElement(item, {
          key: item.props.name,
          onChange,
          value: data[item.props.name] || ""
        });
      })}
    </>
  );
});

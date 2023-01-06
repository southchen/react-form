import React from "react";
import { FormItem } from "./FormItem";
import { Form, Ref } from "./Form";
import { Input } from "./Input";

export default function App() {
  const ref = React.createRef<Ref>();
  return (
    <div className="App">
      <Form ref={ref}>
        <FormItem label={"family name"} name={"familyName"}>
          <Input />
        </FormItem>
        <FormItem label={"given name"} name={"givenName"}>
          <Input />
        </FormItem>
      </Form>

      <button
        type="button"
        onClick={() => {
          ref.current?.submit?.(console.log);
        }}
      >
        Submit
      </button>
      <button
        type="button"
        onClick={() => {
          ref.current?.reset?.();
        }}
      >
        Reset
      </button>
    </div>
  );
}

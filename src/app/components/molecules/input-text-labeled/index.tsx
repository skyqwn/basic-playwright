"use client";

import { ChangeEventHandler, FormEventHandler, useState } from "react";

const InputTextLabel = () => {
  const [text, setText] = useState("");
  const [edit, setEdit] = useState("");
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const onInput: FormEventHandler<HTMLDivElement> = (e) => {
    setEdit(e.currentTarget.innerText);
  };
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label htmlFor="label">라벨</label>
      </div>
      <input
        className="border w-32"
        type="text"
        id="label"
        value={text}
        onChange={onChange}
      />
      <div>값1: {text}</div>
      <div className="border-1" />

      <input className="border w-32" type="text" id="label" />
      <div>값2: </div>
      <div className="border-1" />

      <div>
        <div aria-label="main" contentEditable onInput={onInput} />
        <div>값3: {edit}</div>
      </div>
    </div>
  );
};

export default InputTextLabel;

import React, { InputHTMLAttributes } from 'react';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="w-full p-1 border-2 border-slate-300 border-solid rounded-full"
      {...props}
    />
  );
}

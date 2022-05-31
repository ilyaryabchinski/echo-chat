import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <main className="w-full h-screen flex flex-col max-h-screen">{children}</main>;
}

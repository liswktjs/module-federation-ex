import { HTMLAttributes, PropsWithChildren } from "react";

const Button = ({
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLButtonElement>>) => {
  return <button {...rest}>{children}</button>;
};

export default Button;

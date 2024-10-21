import { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./Button.module.css";

const Button = ({
  children,
  className,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button className={`${styles.btn} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;

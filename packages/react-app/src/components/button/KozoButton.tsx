import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import "./button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "tertiary" | "outline" | "hover" | "text";
  children?: ReactNode;
}

export const KozoButton: FC<ButtonProps> = ({ size, variant, children, ...rest }) => {
  const sizeClass = `kozo-button--${size || "md"}`;
  const variantClass = `kozo-button--${variant ?? "primary"}`;
  const classes = ["kozo-button", sizeClass, variantClass].join(' ');
  return (
    <button className={classes} {...rest}>{children}</button>
  );
}
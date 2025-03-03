import { html } from 'lit';
import "./button.css";

export interface ButtonProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "tertiary" | "outline" | "hover" | "text";
  label: string;
}

export const Button = ({ size, label, variant }: ButtonProps) => {
  const sizeClass = `kozo-button--${size || "md"}`;
  const variantClass = `kozo-button--${variant ?? "primary"}`;
  const classes = ["kozo-button", sizeClass, variantClass].join(' ');
  return html`
    <button class=${classes}>${label}</button>
  `
}
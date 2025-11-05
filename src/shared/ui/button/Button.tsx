

import React from "react";
import clsx from "clsx";
import s from "./Button.module.scss";

type Variant =
  | "default"
  | "transparent"


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};


export function Button({
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        s.button,
        variant && s[`button--${variant}`],
        className
      )}
      {...props}
    />
  );
}



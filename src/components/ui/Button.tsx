import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type BaseButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkButtonProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: "a";
  };

type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as: "button";
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-white shadow-soft hover:-translate-y-0.5 hover:bg-royal focus-visible:outline-navy",
  secondary:
    "border border-navy/15 bg-white text-navy hover:-translate-y-0.5 hover:border-navy/30 hover:bg-ice focus-visible:outline-navy"
};

export function Button({
  as = "a",
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const buttonClassName = `inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`;

  if (as === "button") {
    return (
      <button
        className={buttonClassName}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }

  return (
    <a className={buttonClassName} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
      {children}
    </a>
  );
}

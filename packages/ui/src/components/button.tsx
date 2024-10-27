import { Button, ButtonProps, cn, tv } from "@nextui-org/react";

export type ButtonVariant = "solid" | "bordered";
export type ButtonRounded = "none" | "tn" | "sm" | "md" | "lg" | "full";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonColor = "default" | "primary";

const button = tv({
  base: "rounded-none font-medium",
  variants: {
    variant: {
      solid: "",
      bordered: "border-1 bg-background",
    },
    rounded: {
      none: "",
      tn: "rounded-tn",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
    size: {
      sm: "text-sm",
      md: "text-sm font-bold",
      lg: "text-md h-14 px-4 py-3 font-bold",
    },
    color: {
      default: "bg-background",
      primary: "bg-primary",
    },
  },
  compoundVariants: [
    {
      variant: ["solid"],
      color: ["default"],
      className: "bg-foreground text-background",
    },
    {
      variant: ["bordered"],
      color: ["default"],
      className: "border-default-500 text-foreground",
    },
    {
      variant: ["bordered"],
      color: ["primary"],
      className: "border-primary-300 text-primary",
    },
  ],
  defaultVariants: {
    variant: "solid",
    rounded: "none",
    size: "md",
    color: "default",
  },
});

export const ButtonV1 = ({
  className,
  variant,
  rounded,
  size,
  color,
  as,
  to,
  children,
  ...rest
}: {
  className?: string;
  variant?: ButtonVariant;
  rounded?: ButtonRounded;
  size?: ButtonSize;
  color?: ButtonColor;
  as?: React.RefAttributes<HTMLAnchorElement>;
  to?: string;
  children: React.ReactNode;
} & ButtonProps) => {
  return (
    <Button
      as={as}
      to={to}
      className={cn(button({ variant, rounded, size, color }), className)}
      {...rest}
    >
      {children}
    </Button>
  );
};

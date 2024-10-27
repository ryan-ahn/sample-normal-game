import { cn, tv } from "@nextui-org/react";

type IconSize = "sm" | "md" | "lg";

const icon = tv({
  base: "stroke-foreground",
  variants: {
    size: {
      sm: "h-[16px] w-[16px] stroke-[1.3px]",
      md: "h-[24px] w-[24px] stroke-[1.6px]",
      lg: "h-[32px] w-[32px] stroke-[2px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const ChevronIconV1 = ({
  size,
  className,
}: {
  size: IconSize;
  className?: string;
}) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn(icon({ size }), className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 27L21 16.08L10 5" />
    </svg>
  );
};

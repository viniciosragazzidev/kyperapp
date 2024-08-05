import { cn } from "@/lib/utils";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
const button = tv({
  base: "flex items-center  gap-1.5  border-none px-5 py-2 rounded-lg font-medium   hover:opacity-85 transition-all max-md:w-full justify-center ",
  variants: {
    color: {
      primary: "text-primary-foreground bg-primary",
      secondary: "text-zinc-200 bg-zinc-900 border border-zinc-600",
    },
    size: {
      sm: "h-8 rounded-md px-2.5 text-xs",
      full: "w-full flex-1  white-space-nowrap text-nowrap",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});
type ButtonVariantProps = VariantProps<typeof button>;
type NativeProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps
  extends Omit<NativeProps, keyof ButtonVariantProps>,
    ButtonVariantProps {
  children: React.ReactNode;
  disabled?: boolean;
}
const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        button({ color: props.color, size: props.size }) +
          " " +
          props.className +
          ` ` +
          `${
            props.disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"
          }`
      )}
    >
      {children}
    </button>
  );
};

export default Button;

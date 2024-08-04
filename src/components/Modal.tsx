"use client";
import { X } from "lucide-react";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
const button = tv({
  base: "w-full  max-w-[540px] bg-zinc-900 px-6 py-5 relative rounded-xl flex flex-col max-md:rounded-b-none gap-6 shadow-modal slide-top-animation delay-200",
  variants: {
    size: {
      base: "h-full max-h-[430px]",
      content: "h-min",
    },
  },
  defaultVariants: {
    size: "base",
  },
});
type ModalVariantProps = VariantProps<typeof button>;
type NativeProps = React.HTMLAttributes<HTMLDivElement>;
interface ModalProps
  extends Omit<NativeProps, keyof ModalVariantProps>,
    ModalVariantProps {
  children: React.ReactNode;
  open: boolean;
  onPress: () => void;
}

const Modal = ({ children, open, onPress, ...props }: ModalProps) => {
  return (
    <>
      {open && (
        <div className="opacity-animation w-screen h-screen flex justify-center max-md:items-end items-center fixed backdrop-blur-sm bg-black/50 z-50 inset-0">
          <div {...props} className={button({ size: props.size })}>
            <span className="absolute top-4 right-4">
              <X
                className="text-zinc-400 cursor-pointer"
                onClick={() => onPress()}
              />
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

export function TitleModal({ children }: { children: React.ReactNode }) {
  return <h1 className="text-zinc-200 text-lg font-semibold">{children}</h1>;
}

export function DescriptionModal({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-zinc-400">{children}</p>;
}

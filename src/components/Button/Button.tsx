import { component$ } from "@builder.io/qwik";
import { JSX } from "@builder.io/qwik/jsx-runtime";

interface ButtonProps {
    color?: string,
    p?: string,
    className?: string,
    text?: JSX.Element | string,
    onClick$?: any
}

export const Button = component$(({ ...props }: ButtonProps) => (
    <button {...props} className={`px-8 py-3 mt-5 active:translate-y-0.5 hover:scale-[1.02] transition-transform text-white font-semibold text-lg rounded-md bg-primary ${props.className}`}>
        {props.text}
    </button>
))
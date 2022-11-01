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
    <button {...props} className={`px-5 py-3 mt-5 hover:bg-sky-600 active:bg-sky-700 transition-all text-white font-semibold text-lg rounded-md bg-primary ${props.className}`}>
        {props.text}
    </button>
))
import { component$ } from "@builder.io/qwik";
import { JSX } from "@builder.io/qwik/jsx-runtime";

interface ButtonProps {
    color?: string,
    p?: string,
    animate?: AnimateTypes,
    text?: JSX.Element | string,
    onClick$?: any
}

export type AnimateTypes = 'animate-pulse' | 'animate-bounce' | 'animate-spin' | 'animate-ping' | 'animate-none';


export const Button = component$(({ ...props }: ButtonProps) => (
    <button {...props} className={`px-5 py-3 mt-5 hover:bg-sky-600 text-white font-semibold text-lg rounded-md bg-primary ${props.animate}`}>
        {props.text}
    </button>
))
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface BrandCardProps {
    size?: number | string,
    src: string,
    name: string,
    href?: string
}

export const BrandCard = component$(({ size = 64, ...props }: BrandCardProps) => (
    <Link target={"_blank"} href={props.href}>
        <div className="flex items-center bg-back2 p-2 text-xl gap-3 rounded-2xl hover:border-primary transition-colors border-2 border-transparent pr-5">
            <img width={size} height={size} className="inline-block" src={props.src} />
            {props.name}
        </div>
    </Link>
))
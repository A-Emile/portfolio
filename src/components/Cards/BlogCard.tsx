import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface BrandCardProps {
    img: string
    name: string
    href?: string
    desc?: string
}

export const BlogCard = component$(({ ...props }: BrandCardProps) => (
    <li>
        <Link target={"_blank"} href={props.href}>
            <div className="flex bg-back2 p-2 gap-5 rounded-2xl hover:border-sky-900 border-2 border-transparent">
                <img width={240} height={160} className="inline-block h-40 w-60 object-cover rounded-xl" src={props.img} />
                <div>
                    <h1 className="text-xl">{props.name}</h1>
                    <p className="line-clamp-5 text-gray-400">{props.desc}</p>
                </div>
            </div>
        </Link>
    </li>
))
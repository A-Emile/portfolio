import { component$ } from "@builder.io/qwik";

interface BlogCardProps {
    img?: string
    title: string
    href?: string
    desc?: string
}

export const BlogCard = component$(({ ...props }: BlogCardProps) => (
    <li>
        <a href={props.href}>
            <div className="flex bg-back2 p-2 gap-3 sm:gap-5 rounded-2xl hover:border-primary overflow-hidden border-2 border-transparent">
                <img alt="blog cover image" width={240} height={160} className="sm:h-40 flex-none sm:w-60 h-20 w-32 object-cover rounded-xl" src={props.img} />
                <div>
                    <h1 className="text-md line-clamp-1 font-semibold sm:text-xl">{props.title}</h1>
                    <p className="line-clamp-2 sm:line-clamp-3 text-gray-400 text-sm sm:text-base ">{props.desc}</p>
                </div>
            </div>
        </a>
    </li>
))
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface ItemProps {
    title?: string,
    desc?: string,
    img?: string,
    href?: string,
    gradient?: string,
}

export const ProjectCard = component$((props: ItemProps) => {
    return (
        <Link href={props.href} className="hover:scale-[1.01] bg-back2 shadow-2xl transition-transform rounded-2xl">
            <div className={`rounded-xl w-full bg-gradient-to-r h-full p-[4px] from-[#7928ca] to-[#ff0080] ${props.gradient}`}>
                <div className="flex flex-col p-5 h-full rounded-lg bg-back1">
                    <h1 className="text-xl font-semibold">{props.title}</h1>
                    <p className="flex-grow mb-3">{props.desc}</p>
                    <img alt="project cover image" className="overflow-hidden w-full rounded-xl" width={400} height={220} src={props.img} />
                </div>
            </div>
        </Link>
    )
});
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface ItemProps {
    title?: string,
    desc?: string,
    img?: string,
    href?: string,
}

export const Project = component$((props: ItemProps) => {
    return (
        <Link href={props.href} className="p-5 bg-back2 shadow-2xl hover:border-sky-900 border-2 flex flex-col border-transparent rounded-2xl">
            <div className="text-xl font-semibold">{props.title}</div>
            <p className="text-gray-400 flex-grow mb-3">{props.desc}</p>
            <img className="overflow-hidden rounded-xl" width={400} height={220} src={props.img}/>
        </Link>
    )
});
import { component$ } from "@builder.io/qwik";

export const Projects = component$(() => {
    return (
        <>
            <h2 className="text-xl font-semibold mb-3 mt-10">What I have build:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <Project img="https://cloud-a-emile.dedyn.io/s/sPHSTZsXn2WGjpm/download/clonlio.png" title={"Clonlio"} desc="Portfolio system for Clonlara Students" />
                <Project img="https://cloud-a-emile.dedyn.io/s/Lxb3sNk3xdndsR8/download/zw.jpg" title={"Zauberhafte Welten"} desc="Website for Zauberhafte Welten" />
                <Project img="https://cloud-a-emile.dedyn.io/s/gNBXTLXQSrRD8jR/download/portfolio.png" title={"Personal Portfolio"} desc="Personal Portfolio Website" />
            </div>
        </>
    )
})

interface ItemProps {
    title?: string,
    desc?: string,
    img?: string
}

export const Project = component$((props: ItemProps) => {
    return (
        <div className="p-5 bg-back2 shadow-2xl hover:border-sky-900 border-2 flex flex-col border-transparent rounded-2xl">
            <div className="text-xl font-semibold">{props.title}</div>
            <p className="text-gray-400 flex-grow mb-3">{props.desc}</p>
            <img className="overflow-hidden rounded-xl" width={400} height={220} src={props.img}/>
        </div>
    )
});
import { component$ } from "@builder.io/qwik"
import { ProjectCard } from "./ProjectCard"

export default component$(() => {
    return (
        <>
            <h2 className="text-lg font-semibold mb-3">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 animate__animated animate__fadeIn">
                <ProjectCard gradient="from-blue-700 to-blue-200" href="/projects/clonlio" img="/projects/clonlio/preview.png" title={"Clonlio"} desc="Portfolio system for Clonlara Students" />
                <ProjectCard gradient="from-purple-600 to-[#ff0080]" href="/projects/zauberhafte-welten" img="/projects/zw/preview.jpg" title={"Zauberhafte Welten"} desc="Website for Zauberhafte Welten" />
                <ProjectCard gradient="from-yellow-500 to-pink-300"  href="/projects/portfolio" img="/projects/pp/preview.png" title={"Personal Portfolio"} desc="Personal Portfolio Website" />
            </div>
        </>
    )
})

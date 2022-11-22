import { component$ } from "@builder.io/qwik"
import { ProjectCard } from "./ProjectCard"

export default component$(() => {
    return (
        <>
            <h1 className="mb-3 text-lg font-semibold">Projekte</h1>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 animate__animated animate__fadeIn">
                <ProjectCard gradient="from-fuchsia-700 to-fuchsia-400" href="/projects/ecomm" img="/projects/ecomm/preview.png" title="E-Commerce Website" desc="Landingpage für WAKE-MT-2" />
                <ProjectCard gradient="from-blue-700 to-blue-200" href="/projects/clonlio" img="/projects/clonlio/preview.png" title={"Clonlio"} desc="Portfolio-Management-System für Clonlara Schüler" />
                <ProjectCard gradient="from-purple-600 to-[#ff0080]" href="/projects/zauberhafte-welten" img="/projects/zw/preview.jpg" title={"Zauberhafte Welten"} desc="Website für Zauberhafte Welten" />
            </div>
        </>
    )
})

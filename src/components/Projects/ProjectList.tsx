import { component$ } from "@builder.io/qwik"
import { Project } from "./Project"

export default component$(() => {
    return (
        <>
            <h2 className="text-lg font-semibold mb-3 mt-10">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <Project href="/projects/clonlio" img="/projects/clonlio/preview.png" title={"Clonlio"} desc="Portfolio system for Clonlara Students" />
                <Project href="/projects/zauberhafte-welten" img="/projects/zw/preview.jpg" title={"Zauberhafte Welten"} desc="Website for Zauberhafte Welten" />
                <Project href="/projects/portfolio" img="/projects/pp/preview.png" title={"Personal Portfolio"} desc="Personal Portfolio Website" />
            </div>
        </>
    )
})

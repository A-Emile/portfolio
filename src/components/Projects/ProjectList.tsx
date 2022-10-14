import { component$ } from "@builder.io/qwik"
import { Project } from "."

export default component$(() => {
    return (
        <>
            <h2 className="text-xl font-semibold mb-3 mt-10">What I have build:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <Project href="/projects/clonlio" img="https://cloud-a-emile.dedyn.io/s/sPHSTZsXn2WGjpm/download/clonlio.png" title={"Clonlio"} desc="Portfolio system for Clonlara Students" />
                <Project href="/projects/zauberhafte-welten" img="https://cloud-a-emile.dedyn.io/s/Lxb3sNk3xdndsR8/download/zw.jpg" title={"Zauberhafte Welten"} desc="Website for Zauberhafte Welten" />
                <Project href="/projects/portfolio" img="https://cloud-a-emile.dedyn.io/s/gNBXTLXQSrRD8jR/download/portfolio.png" title={"Personal Portfolio"} desc="Personal Portfolio Website" />
            </div>
        </>
    )
})
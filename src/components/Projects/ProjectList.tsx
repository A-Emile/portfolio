import { component$ } from "@builder.io/qwik"
import { Project } from "."

export default component$(() => {
    return (
        <>
            <h2 className="text-xl font-semibold mb-3 mt-10">What I have build:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <Project href="/projects/clonlio" img="https://cloud-a-emile.dedyn.io/core/preview?fileId=108504&c=d737112aeb9eebb4716e7823899d550f&x=250&y=250&forceIcon=0&a=1" title={"Clonlio"} desc="Portfolio system for Clonlara Students" />
                <Project href="/projects/zauberhafte-welten" img="https://cloud-a-emile.dedyn.io/core/preview?fileId=108558&c=4d7f4f9ed04bb0367585f3d44dd0729b&x=250&y=250&forceIcon=0&a=1" title={"Zauberhafte Welten"} desc="Website for Zauberhafte Welten" />
                <Project href="/projects/portfolio" img="https://cloud-a-emile.dedyn.io/core/preview?fileId=108568&c=036f470653a0c8f8c35e2690abce4323&x=250&y=250&forceIcon=0&a=1" title={"Personal Portfolio"} desc="Personal Portfolio Website" />
            </div>
        </>
    )
})

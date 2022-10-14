import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import ProjectList from "~/components/Projects/ProjectList";

export default component$(() => {
    return (
        <div class={"ProjectList"}>
            <ProjectList />
        </div>
    )
})

export const head: DocumentHead = {
    title: 'Projects - A-Emile',
};

import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './style.css?inline';

export default component$(() => {
    useStyles$(styles)

    return (
        <div class={`pt-10 blog max-w-5xl p-5 m-auto`}>
            <Slot />
        </div>
    );
});

export const head: DocumentHead = ({ head }) => {
    console.log(head.frontmatter);
    
    return {
        title: head.title,
    };
};
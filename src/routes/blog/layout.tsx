import { component$, Slot } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
    return (
        <div class={`pt-10 post max-w-6xl p-5 m-auto`}>
            <Slot />
        </div>
    );
});

export const head: DocumentHead = ({head}) => {
    return {
        title: `${head.title} - A-Emile`,
    };
};
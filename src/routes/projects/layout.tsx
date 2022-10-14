import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './style.css?inline';

export default component$(() => {
  useStyles$(styles)
  return (
    <div class={"project pt-10 max-w-6xl p-5 m-auto"}>
      <Slot />
    </div>
  );
});

export const head: DocumentHead = ({ head }) => {
  return {
    title: `${head.title} - A-Emile`,
  };
};
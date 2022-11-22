import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './style.css?inline';

export default component$(() => {
  useStyles$(styles)
  return (
    <div class={"p-5 pt-10 m-auto max-w-6xl project"}>
      <Slot />
    </div>
  );
});

export const head: DocumentHead = ({ head }) => {
  return {
    title: `${head.title} - Anatole Gonon`,
  };
};
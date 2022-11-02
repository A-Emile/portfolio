import { component$, Slot } from '@builder.io/qwik';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <Header />
      <main lang='de' className='flex-grow'>
        <Slot />
      </main>
      <Footer />
    </>
  );
});

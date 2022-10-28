import { component$, Slot } from '@builder.io/qwik';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <div className='flex flex-col min-h-screen text-gray-200 bg-gray-900'>
        <Header />
        <main className='flex-grow'>
          <Slot />
        </main>
        <Footer />
      </div>
    </>
  );
});

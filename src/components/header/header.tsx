import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {

  return (
    <header>
      <nav className='p-5 border-b border-gray-800'>
        <Link className='font-bold text-2xl' href='/'>A-Emile</Link>
      </nav>
    </header>
  );
});

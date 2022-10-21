import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {

  return (
    <header>
      <nav className='p-5 border-b gap-5 items-center px-7 border-gray-800 flex'>
        <Link className='font-bold text-2xl flex-grow' href='/'>A-Emile</Link>
        <Link className='underline-offset-2 hover:underline' href='/projects'>Projects</Link>
        <Link className='underline-offset-2 hover:underline' href='/blog'>Blog</Link>
        <Link className='underline-offset-2 hover:underline' href='/contact'>Contact</Link>
      </nav>
    </header>
  );
});

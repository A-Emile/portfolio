import { component$ } from '@builder.io/qwik';

export default component$(() => {

  return (
    <header>
      <nav className='p-5 border-b gap-5 items-center px-7 border-gray-800 flex'>
        <a className='font-bold text-2xl flex-grow' href='/'>A-Emile</a>
        <a className='underline-offset-2 hover:underline' href='/projects'>Projects</a>
        <a className='underline-offset-2 hover:underline' href='/blog'>Blog</a>
        <a className='underline-offset-2 hover:underline' href='/contact'>Contact</a>
      </nav>
    </header>
  );
});

import { component$ } from '@builder.io/qwik';

export default component$(() => {

  return (
    <header>
      <nav className='p-5 border-b items-center px-7 border-gray-800 flex'>
        <a className='font-bold text-2xl flex-grow' href='/'>A-Emile</a>
        <a className='transition-colors rounded-lg p-1 font-semibold text-gray-400 hover:bg-back2 px-5' href='/'>Home</a>
        <a className='transition-colors rounded-lg p-1 font-semibold text-gray-400 hover:bg-back2 px-5' href='/blog'>Blog</a>
        <a className='transition-colors rounded-lg p-1 font-semibold text-gray-400 hover:bg-back2 px-5' href='/contact'>Contact</a>
      </nav>
    </header>
  );
});

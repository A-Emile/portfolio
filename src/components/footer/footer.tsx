import { component$ } from '@builder.io/qwik';

export default component$(() => {

  return (
    <footer className='flex justify-center items-center p-5 text-gray-500 border-t border-back2'>
      <div>
        <a href="https://github.com/A-Emile" target="_blank">
          Made with <font className='text-red-500'>♡</font> by Anatole Gonon
        </a>
      </div>
    </footer>
  );
});

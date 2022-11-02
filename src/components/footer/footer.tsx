import { component$ } from '@builder.io/qwik';

export default component$(() => {

  return (
    <footer className='border-back2 border-t text-gray-500 flex justify-center items-center p-5'>
      <div>
        <a href="https://github.com/A-Emile" target="_blank">
          Made with <font className='text-red-500'>♡</font> by A-Emile
        </a>
      </div>
    </footer>
  );
});

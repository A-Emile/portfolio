import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({
    menu: false
  })
  return (
    <header>
      <nav className='flex items-center p-5 px-7 m-auto max-w-6xl border-b border-back2'>
        <a href='/'><h1 className='text-2xl font-bold'>Anatole</h1></a>
        <div className='flex-grow justify-start' />
        <button title={`${store.menu ? "close" : "open"} menu`} className={`flex relative z-20 flex-col gap-2 sm:hidden`} onClick$={() => store.menu = !store.menu}>
          <div className={`w-6 h-0.5 transition-transform bg-gray-300 ${store.menu && `rotate-45 translate-y-[0.325rem]`}`} />
          <div className={`w-6 h-0.5 transition-transform bg-gray-300 ${store.menu && `-rotate-45 -translate-y-[0.325rem]`}`} />
        </button>
        <div className={`nav-link flex transition-all -top-80 ${store.menu && "-top-0"} sm:-translate-y-0 bg-back2 flex-col sm:flex-row px-5 sm:px-0 gap-3 justify-center items-center h-screen absolute bg-scroll sm:bg-transparent z-10 sm:h-full right-0 left-0 sm:static ${!store.menu && "hidden sm:block"}`}>
          <a className='p-1 px-5 py-2 mt-20 w-full text-2xl font-semibold text-center bg-sky-300 bg-opacity-5 rounded-lg transition-colors hover:bg-opacity-5 hover:shadow sm:bg-transparent sm:mt-0 sm:w-auto sm:text-base hover:bg-sky-300' href='/'>Start</a>
          <a className='p-1 px-5 py-2 w-full text-2xl font-semibold text-center bg-sky-300 bg-opacity-5 rounded-lg transition-colors hover:bg-opacity-5 hover:shadow sm:bg-transparent sm:w-auto sm:text-base hover:bg-sky-300' href='/blog'>Blog</a>
          <a className='p-1 px-5 py-2 w-full text-2xl font-semibold text-center bg-sky-300 bg-opacity-5 rounded-lg transition-colors hover:bg-opacity-5 hover:shadow sm:bg-transparent sm:w-auto sm:text-base hover:bg-sky-300' href='/contact'>Kontakt</a>
        </div>
      </nav>
    </header>
  );
});

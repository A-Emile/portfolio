import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({
    menu: false
  })
  return (
    <header>
      <nav className='p-5 border-b items-center px-7 border-gray-800 flex'>
        <a className='font-bold text-2xl flex-grow' href='/'>A-Emile</a>
        <button className={`z-20 sm:hidden flex flex-col gap-2 relative`} onClick$={() => store.menu = !store.menu}>
          <div className={`w-6 h-0.5 transition-transform bg-gray-300 ${store.menu && `rotate-45 translate-y-[0.325rem]`}`}/>
          <div className={`w-6 h-0.5 transition-transform bg-gray-300 ${store.menu && `-rotate-45 -translate-y-[0.325rem]`}`}/>
        </button>
        <div className={`flex transition-all -translate-y-80 ${store.menu && "-translate-y-0"} sm:-translate-y-0 bg-back2 flex-col sm:flex-row px-5 sm:px-0 gap-3 justify-center items-center h-screen absolute bg-scroll top-0 sm:bg-transparent z-10 sm:h-full right-0 left-0 sm:static ${!store.menu && "hidden sm:block"}`}>
            <a className='hover:bg-opacity-5 py-2 bg-opacity-5 bg-white sm:bg-transparent transition-colors sm:mt-0 mt-20 w-full sm:w-auto text-center rounded-lg p-1 text-2xl sm:text-base font-semibold text-gray-400 hover:bg-white px-5' href='/'>Home</a>
            <a className='hover:bg-opacity-5 py-2 bg-opacity-5 bg-white sm:bg-transparent transition-colors w-full sm:w-auto text-center rounded-lg p-1 text-2xl sm:text-base font-semibold text-gray-400 hover:bg-white px-5' href='/blog'>Blog</a>
            <a className='hover:bg-opacity-5 py-2 bg-opacity-5 bg-white sm:bg-transparent transition-colors w-full sm:w-auto text-center rounded-lg p-1 text-2xl sm:text-base font-semibold text-gray-400 hover:bg-white px-5' href='/contact'>Contact</a>
        </div>
      </nav>
    </header>
  );
});

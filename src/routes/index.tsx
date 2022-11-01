import { component$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';
import { BrandCard } from '../components/icons/BrandCard';
import { Button } from '../components/Buttons/Buttons';
import ProjectList from '../components/Projects/ProjectList';
export default component$(() => {
  return (
    <div className={`pt-10 max-w-6xl p-5 m-auto`}>
      <div className='mb-16'>
        <h1 className='text-5xl mb-3 font-bold'>Anatole Gonon</h1>
        <p className='mb-5 text-gray-400'>Web developer and server administrator from Germany</p>
        <Link href='/contact'>
          <Button className='animate__animated animate__jackInTheBox' text={"Contact me"}/>
        </Link>
      </div>
      <ProjectList />
      <h3 className='text-lg mt-20 font-semibold mb-3'>Technologies I use</h3>
      <div className='flex gap-5 w-full justify-start flex-wrap mb-5 animate__animated animate__fadeIn'>
        <BrandCard href='https://www.javascript.com/' name='Java Script' src='/icons/javascript.png' />
        <BrandCard href='https://reactjs.org/' name='React' src='/icons/react.png' />
        <BrandCard href='https://nextjs.org/' name='Next.js' src='/icons/next.webp' />
        <BrandCard href='https://qwik.builder.io/' name='qwik' src='/icons/qwik.svg' />
        <BrandCard href='https://tailwindcss.com/' name='Tailwind CSS' src='/icons/tailwind.png' />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Portfolio - A-Emile',
};

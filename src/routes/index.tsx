import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { BrandCard } from '../components/icons/BrandCard';
import { Button } from '../components/Button/Button';
import ProjectList from '../components/Projects/ProjectList';
export default component$(() => {
  return (
    <div className={`p-5 pt-10 m-auto max-w-6xl`}>
      <div className='flex flex-col gap-5 mb-16 sm:flex-row'>
        <div>
          <img alt='image of Anatole' width={175} height={175} className={"overflow-hidden mt-2 w-20 rounded-full sm:w-[175px]"} src='/A-Emile.webp' />
        </div>
        <div>
          <h1 className='text-3xl font-bold sm:text-5xl sm:mb-3'>Anatole Gonon</h1>
          <div className='flex gap-3 items-center sm:mb-6 max-w-3xl'>
            <p>
Hi! Ich bin Web- und App-Entwickler mit 4 Jahren Erfahrung und habe mich auf die Gestaltung von modernen und benutzerfreundlichen Websites und Apps spezialisiert. Mit meiner Expertise und meinem Auge für Detail kann ich Ihnen dabei helfen, Ihr Online-Angebot zu verbessern und zu erweitern. Ob Sie eine neue Website für Ihr Unternehmen benötigen oder Ihre bestehende Website auf den neuesten Stand bringen möchten, ich stehe Ihnen gerne mit meinem Fachwissen und meiner Erfahrung zur Verfügung. Lassen Sie mich wissen, wie ich Ihnen helfen kann!
            </p>
          </div>
          <a href='/contact'>
            <Button text={"Kontakt"} />
          </a>
        </div>
      </div>
      <ProjectList />
      <h1 className='mt-20 mb-3 text-lg font-semibold'>Technologien, die ich verwende</h1>
      <div className='flex flex-wrap gap-5 justify-start mb-5 w-full animate__animated animate__fadeIn'>
        <BrandCard size={48} href='https://en.wikipedia.org/wiki/HTML5' name='HTML' src='/icons/html.svg' />
        <BrandCard size={48} href='https://en.wikipedia.org/wiki/CSS' name='CSS' src='/icons/css.svg' />
        <BrandCard href='https://www.javascript.com/' name='Java Script' src='/icons/javascript.png' />
        <BrandCard href='https://reactjs.org/' name='React' src='/icons/react.png' />
        <BrandCard href='https://nextjs.org/' name='Next.js' src='/icons/next.webp' />
        <BrandCard href='https://qwik.builder.io/' name='qwik' src='/icons/qwik.svg' />
        <BrandCard href='https://tailwindcss.com/' name='Tailwind CSS' src='/icons/tailwind.png' />
        <BrandCard href='https://wordpress.org/' color='red' name='WordPoress' src='/icons/wordpress.svg' />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Portfolio - A-Emile',
};

import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>
      <meta name="google-site-verification" content="xjzvkg_ntbI7laCH1Fb6HTAaWOo2T4oQOXBEPsvzXcI" />
      <meta prefix="og:http://ogp.me/ns#" />
      <link rel="canonical" href={loc.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="/icons/A-Emile_32x.png" />

      <meta property="og:site_name" content="A-Emile" />
      <meta name="twitter:site" content="@A-Emile" />
      <meta name="twitter:title" content="A-Emile Portfolio" />
      <meta name="twitter:image" content="/og.svg" />
      <meta property="og:title" content="A-Emile | UX Designer &amp; Front-end Developer" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og.svg" />
      <meta property="og:url" content="https://a-emile.dedyn.io" />
      <meta name="description" content="Portfolio from Anatole Gonon" />

      {head.meta.map((m) => (
        <meta {...m} />
      ))}

      {head.links.map((l) => (
        <link {...l} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});

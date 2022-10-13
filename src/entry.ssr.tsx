import type { RenderToStreamOptions } from '@builder.io/qwik/server';
import { manifest } from '@qwik-client-manifest';
import Root from './root';
import { renderToStream } from '@builder.io/qwik/server';

export default function (opts: RenderToStreamOptions) {
  return renderToStream(<Root />, {
    manifest,
    prefetchStrategy: {
      // custom prefetching config
    },
    ...opts,
  });
}
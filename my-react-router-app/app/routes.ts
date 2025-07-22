import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),

  layout('routes/amsterdam/_layout.tsx', [
    route('amsterdam', 'routes/amsterdam/index.tsx'),

    route('amsterdam/bestuur-en-organisatie', 'routes/amsterdam/bestuur-en-organisatie/index.tsx'),
    route(
      'amsterdam/bestuur-en-organisatie/college-van-burgemeester-en-wethouders',
      'routes/amsterdam/bestuur-en-organisatie/college-van-burgemeester-en-wethouders.tsx'
    ),
    route('amsterdam/bestuur-en-organisatie/gemeenteraad', 'routes/amsterdam/bestuur-en-organisatie/gemeenteraad.tsx'),

    route('amsterdam/burgerzaken', 'routes/amsterdam/burgerzaken.tsx'),

    route('amsterdam/contact', 'routes/amsterdam/contact/index.tsx'),
    route('amsterdam/contact/bedankt', 'routes/amsterdam/contact/bedankt.tsx'),
    route('amsterdam/contact/gegevens', 'routes/amsterdam/contact/gegevens.tsx'),
    route('amsterdam/contact/vraag', 'routes/amsterdam/contact/vraag.tsx'),

    route('amsterdam/kunst-en-cultuur', 'routes/amsterdam/kunst-en-cultuur.tsx'),

    route('amsterdam/nieuws', 'routes/amsterdam/nieuws.tsx'),

    route('amsterdam/projecten', 'routes/amsterdam/projecten/index.tsx'),
    route('amsterdam/projecten/stadsdeel', 'routes/amsterdam/projecten/stadsdeel.tsx'),

    route('amsterdam/zoeken', 'routes/amsterdam/zoeken.tsx'),
  ]),
] satisfies RouteConfig;

import type { Route } from './+types/home';

import Welcome from '~/welcome/welcome';

import { docTitle } from '~/constants';

export function meta({}: Route.MetaArgs) {
  return [{ title: docTitle }, { name: 'description', content: 'Amsterdam Design System' }];
}

export default function Home() {
  return <Welcome />;
}

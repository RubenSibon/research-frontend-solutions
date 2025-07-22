import type { Route } from './+types/index';

import Projecten from '~/amsterdam/projecten';

import { docTitle } from '~/constants';

export function meta({}: Route.MetaArgs) {
  return [{ title: docTitle }, { name: 'description', content: 'Amsterdam Design System' }];
}

export default function AmsterdamRoute() {
  return <Projecten />;
}

import type { Route } from '../+types/index';

import Question from '~/amsterdam/contact/vraag';

import { docTitle } from '~/constants';

export function meta({}: Route.MetaArgs) {
  return [{ title: docTitle }, { name: 'description', content: 'Amsterdam Design System' }];
}

export default function AmsterdamRoute() {
  return <Question />;
}

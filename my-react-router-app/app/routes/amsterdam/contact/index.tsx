import type { Route } from "../+types/index";

import Contact from "~/amsterdam/contact";

import { docTitle } from "~/constants";

export function meta({}: Route.MetaArgs) {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
}

export default function AmsterdamRoute() {
  return <Contact />;
}

import type { Route } from "./+types/index";

import Contact1 from "~/signalen/contact-1";

import { docTitle } from "~/constants";

export function meta({}: Route.MetaArgs) {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
}

export default function SingalenPagina() {
  return <Contact1 />;
}

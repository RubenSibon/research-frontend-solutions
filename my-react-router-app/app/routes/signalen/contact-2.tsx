import type { Route } from "./+types/index";

import Contact2 from "~/signalen/contact-2";

import { docTitle } from "~/constants";

export function meta({}: Route.MetaArgs) {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
}

export default function SingalenPagina() {
  return <Contact2 />;
}

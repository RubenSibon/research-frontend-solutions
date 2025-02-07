import type { Route } from "./+types/index";

import Docs from "~/signalen/documenten";

import { docTitle } from "~/constants";

export function meta({}: Route.MetaArgs) {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
}

export default function SingalenPagina() {
  return <Docs />;
}

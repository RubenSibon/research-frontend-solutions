import type { Route } from "./+types/index";

import VulAan3 from "~/signalen/vul-aan-3";

import { docTitle } from "~/constants";

export function meta({}: Route.MetaArgs) {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
}

export default function SingalenPagina() {
  return <VulAan3 />;
}

import type { Route } from "./+types/index";

import VulAan1 from "~/signalen/vul-aan-1b";

import { docTitle } from "~/constants";

export function meta({}: Route.MetaArgs) {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
}

export default function SingalenPagina() {
  return <VulAan1 />;
}

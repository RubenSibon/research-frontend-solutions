import type { Route } from "./+types/index";

import Summary from "~/signalen/samenvatting";

import { docTitle } from "~/constants";

export function meta({}: Route.MetaArgs) {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
}

export default function SingalenPagina() {
  return <Summary />;
}

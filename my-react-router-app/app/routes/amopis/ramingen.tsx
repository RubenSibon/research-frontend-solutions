import type { Route } from "./+types/ramingen";

import EstimationPage from "~/amopis/ramingen";

import { docTitle } from "~/constants";

export function meta({}: Route.MetaArgs) {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
}

export default function Ramingen() {
  return <EstimationPage />;
}

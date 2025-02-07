import type { Route } from "./+types/index";

import AmopisProjectPage from "~/amopis";

import { docTitle } from "~/constants";

export function meta({}: Route.MetaArgs) {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
}

export default function Amopis() {
  return <AmopisProjectPage />;
}

import { MetaFunction } from "@remix-run/react";
import KunstEnCultuur from "~/amsterdam/kunst-en-cultuur";

import { docTitle } from "~/constants";

export const meta: MetaFunction = () => {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
};

export default function AmsterdamRoute() {
  return <KunstEnCultuur />;
}

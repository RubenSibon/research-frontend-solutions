import { MetaFunction } from "@remix-run/react";
import Contact from "~/amsterdam/contact";

import { docTitle } from "~/constants";

export const meta: MetaFunction = () => {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
};

export default function AmsterdamRoute() {
  return <Contact />;
}

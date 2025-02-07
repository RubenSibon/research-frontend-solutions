import { MetaFunction } from "@remix-run/react";
import Question from "~/amsterdam/contact/vraag";

import { docTitle } from "~/constants";

export const meta: MetaFunction = () => {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
};

export default function AmsterdamRoute() {
  return <Question />;
}

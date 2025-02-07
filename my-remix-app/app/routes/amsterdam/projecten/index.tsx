import { MetaFunction } from "@remix-run/react";
import Projecten from "~/amsterdam/projecten";

import { docTitle } from "~/constants";

export const meta: MetaFunction = () => {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
};

export default function AmsterdamRoute() {
  return <Projecten />;
}

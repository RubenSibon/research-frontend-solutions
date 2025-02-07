import { MetaFunction } from "@remix-run/react";
import Project from "~/amsterdam/projecten/stadsdeel";

import { docTitle } from "~/constants";

export const meta: MetaFunction = () => {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
};

export default function AmsterdamRoute() {
  return <Project />;
}

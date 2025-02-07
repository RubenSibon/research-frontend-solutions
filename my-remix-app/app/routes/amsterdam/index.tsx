import { MetaFunction } from "@remix-run/react";
import HomePage from "~/amsterdam";
import AmsterdamLayout from "~/amsterdam/layout";

import { docTitle } from "~/constants";

export const meta: MetaFunction = () => {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
};

export default function AmsterdamRoute() {
  return (
    <AmsterdamLayout>
      <HomePage />
    </AmsterdamLayout>
  );
}

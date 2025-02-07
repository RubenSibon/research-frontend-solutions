import { MetaFunction } from "@remix-run/react";

import EstimationPage from "~/amopis/ramingen";

import { docTitle } from "~/constants";

export const meta: MetaFunction = () => {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
};

export default function Ramingen() {
  return <EstimationPage />;
}

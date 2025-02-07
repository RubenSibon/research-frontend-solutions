import { MetaFunction } from "@remix-run/react";
import Bedankt from "~/amsterdam/contact/bedankt";

import { docTitle } from "~/constants";

export const meta: MetaFunction = () => {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
};

export default function AmsterdamRoute() {
  return <Bedankt />;
}

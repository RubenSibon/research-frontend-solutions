import { MetaFunction } from "@remix-run/react";
import Gemeenteraad from "~/amsterdam/bestuur-en-organisatie/gemeenteraad";

import { docTitle } from "~/constants";

export const meta: MetaFunction = () => {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
};

export default function AmsterdamRoute() {
  return <Gemeenteraad />;
}

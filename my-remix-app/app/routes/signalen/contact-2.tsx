import Contact2 from "~/signalen/contact-2";

import { docTitle } from "~/constants";
import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
};

export default function SingalenPagina() {
  return <Contact2 />;
}

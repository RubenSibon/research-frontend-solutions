import Home from "~/signalen";

import { docTitle } from "~/constants";
import { MetaFunction } from "@remix-run/react";
import SignalenLayout from "~/signalen/layout";

export const meta: MetaFunction = () => {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
};

export default function SingalenPagina() {
  return (
    <SignalenLayout>
      <Home />
    </SignalenLayout>
  );
}

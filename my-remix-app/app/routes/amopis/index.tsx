import { MetaFunction } from "@remix-run/react";

import AmopisProjectPage from "~/amopis";
import AmopisLayout from "~/amopis/layout";

import { docTitle } from "~/constants";

export const meta: MetaFunction = () => {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
};

export default function Amopis() {
  return (
    <AmopisLayout>
      <AmopisProjectPage />
    </AmopisLayout>
  );
}

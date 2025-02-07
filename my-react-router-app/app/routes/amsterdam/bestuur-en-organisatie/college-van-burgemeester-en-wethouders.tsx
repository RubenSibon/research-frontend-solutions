import type { Route } from "../+types/index";

import CollegeVanBurgemeesterEnWethouders from "~/amsterdam/bestuur-en-organisatie/college-van-burgemeester-en-wethouders";

import { docTitle } from "~/constants";

export function meta({}: Route.MetaArgs) {
  return [{ title: docTitle }, { name: "description", content: "Amsterdam Design System" }];
}

export default function AmsterdamRoute() {
  return <CollegeVanBurgemeesterEnWethouders />;
}

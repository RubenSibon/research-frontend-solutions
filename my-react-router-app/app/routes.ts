import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  layout("amopis/layout.tsx", [
    route("amopis", "routes/amopis/index.tsx"),
    route("amopis/ramingen", "routes/amopis/ramingen.tsx"),
  ]),

  // layout("amsterdam/layout.tsx", [route("amsterdam", "routes/amsterdam.tsx")]),

  // layout("signalen/layout.tsx", [route("signalen", "routes/signalen.tsx")]),
] satisfies RouteConfig;

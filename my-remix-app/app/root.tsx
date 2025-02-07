import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import { docTitle } from "./constants";

import stylesheet from "./app.css?url";

import adsTokens from "@amsterdam/design-system-tokens/dist/index.theme.css?url";
import adsFont from "@amsterdam/design-system-assets/font/index.css?url";
import adsCSS from "@amsterdam/design-system-css/dist/index.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: adsTokens },
  { rel: "stylesheet", href: adsFont },
  { rel: "stylesheet", href: adsCSS },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>{docTitle}</title>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

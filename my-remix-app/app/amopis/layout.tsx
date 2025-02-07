import { Avatar, Column, Grid, Header, PageMenu, Screen, SkipLink } from "@amsterdam/design-system-react";

import { Sidebar } from "./_components/SideBar/SideBar";

import stylesheet from "./amopis.css?url";
import compactTheme from "@amsterdam/design-system-tokens/dist/compact.theme.css?url";
import { LinksFunction } from "@remix-run/node";
import { ReactNode } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: compactTheme },
];

function AmopisLayout({ children }: { children: ReactNode }) {
  return (
    <div className="ams-theme ams-theme--compact">
      <SkipLink href="#main">Direct naar inhoud</SkipLink>
      <Screen className="ams-screen--amopis" fullHeight>
        <div className="amopis-app-grid">
          <Sidebar />
          <Column gap="none">
            <Header
              brandName="Amopis"
              logoLinkTitle="Naar de homepage van Amopis"
              menuItems={<Avatar label="KH" title="Goedemorgen Kees Herder" />}
            />

            <div id="main" className="amopis-main-background">
              {children}
            </div>

            <Grid paddingVertical="small">
              <Grid.Cell span="all">
                <PageMenu>
                  <PageMenu.Link href="/amopis">Kerngegevens</PageMenu.Link>
                  <PageMenu.Link href="/amopis/ramingen">Ramingen</PageMenu.Link>
                  <PageMenu.Link href="#">E-mail je vraag of feedback</PageMenu.Link>
                  <PageMenu.Link href="#">Bekijk veelgestelde vragen</PageMenu.Link>
                  <PageMenu.Link href="#">Bekijk releasebeschrijving</PageMenu.Link>
                  <PageMenu.Link href="/">Prototypes</PageMenu.Link>
                </PageMenu>
              </Grid.Cell>
            </Grid>
          </Column>
        </div>
      </Screen>
    </div>
  );
}

export default AmopisLayout;

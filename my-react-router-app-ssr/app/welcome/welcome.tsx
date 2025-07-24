import { Grid, LinkList, Page } from '@amsterdam/design-system-react';

export default function Signalen() {
  return (
    <Page className="ams-theme">
      <Grid paddingVertical="2x-large">
        <Grid.Cell span="all">
          <LinkList>
            <LinkList.Link href="/amsterdam">Amsterdam</LinkList.Link>
            {/* Append route import here */}
          </LinkList>
        </Grid.Cell>
      </Grid>
    </Page>
  );
}

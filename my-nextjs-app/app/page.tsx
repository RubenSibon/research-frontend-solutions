'use client';

import { Grid, LinkList, Page } from '@amsterdam/design-system-react';
import NextLink from 'next/link';

export default function Signalen() {
  return (
    <Page className="ams-theme">
      <Grid paddingVertical="2x-large">
        <Grid.Cell span="all">
          <LinkList>
            <NextLink href="/amsterdam" legacyBehavior passHref>
              <LinkList.Link>Amsterdam</LinkList.Link>
            </NextLink>
            {/* Append route import here */}
          </LinkList>
        </Grid.Cell>
      </Grid>
    </Page>
  );
}

import {
  Breadcrumb,
  Grid,
  Heading,
  Image,
  LinkList,
  Paragraph,
  Spotlight,
  TextInput,
} from "@amsterdam/design-system-react";

import constructionWorkImage from "../_assets/construction-work.jpg";
import constructionWorkMapImage from "../_assets/construction-work-map.jpg";

function Projecten() {
  return (
    <>
      <Grid>
        <Grid.Cell span="all">
          <Breadcrumb>
            <Breadcrumb.Link href="/amsterdam">Home</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      <Grid gapVertical="small" paddingBottom="medium">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }}>
          <Heading className="ams-mb--sm">Bouw- en verkeersprojecten</Heading>
          <Paragraph size="large">
            <strong>Overzicht van ruim 200 projecten in Amsterdam.</strong> Lees waar en wanneer we werken aan
            nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van parken of ontwikkeling van hele
            gebieden. En hoe u kunt meedenken. Ga naar de kaart om een project in de stad te zien.
          </Paragraph>
        </Grid.Cell>
      </Grid>
      <Grid paddingBottom="medium">
        <Grid.Cell span={{ narrow: 2, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 3 }}>
          <Heading level={2} size="level-4" className="ams-mb--xs">
            Projecten per stadsdeel
          </Heading>
          <LinkList>
            {["Centrum", "Nieuw-West", "Noord", "Oost", "Weesp", "West", "Zuid", "Zuidoost"].map((district) => (
              <LinkList.Link href="/amsterdam/projecten/stadsdeel">{district}</LinkList.Link>
            ))}
          </LinkList>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 2, medium: 4, wide: 5 }}>
          <Heading level={2} size="level-4" className="ams-mb--xs">
            Zoek project
          </Heading>
          <TextInput />
        </Grid.Cell>
      </Grid>
      <Spotlight color="yellow">
        <Grid paddingVertical="medium">
          <Grid.Cell span={3} start={{ narrow: 1, medium: 1, wide: 3 }}>
            <Heading level={2} size="level-4" className="ams-mb--xs">
              Kaart met bouwprojecten en verkeersprojecten
            </Heading>
            <Paragraph>Ga via de kaart naar meer informatie over het project dat u zoekt.</Paragraph>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
            <Image alt="" className="ams-image" src={constructionWorkImage} />
          </Grid.Cell>
        </Grid>
      </Spotlight>
      <Image alt="" className="ams-image" src={constructionWorkMapImage} />
    </>
  );
}

export default Projecten;

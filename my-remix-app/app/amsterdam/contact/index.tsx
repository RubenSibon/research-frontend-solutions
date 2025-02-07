import { type FormEvent } from "react";
import { Breadcrumb, Button, FieldSet, Grid, Heading, Link, Paragraph, Radio } from "@amsterdam/design-system-react";
import { useNavigate } from "@remix-run/react";

function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate("/amsterdam/contact/vraag");
  };

  return (
    <Grid paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Breadcrumb>
          <Breadcrumb.Link href="/amsterdam">Home</Breadcrumb.Link>
        </Breadcrumb>
        <form className="ams-gap--md" onSubmit={handleSubmit}>
          <Heading>Contact</Heading>
          <FieldSet legend="Waar gaat uw melding over?">
            <Radio name="soort" value="vraag" defaultChecked>
              Vraag
            </Radio>
            <Radio name="soort" value="klacht" disabled>
              Klacht
            </Radio>
            <Radio name="soort" value="meldingen" disabled>
              Meldingen openbare ruimte en overlast
            </Radio>
            <Radio name="soort" value="idee" disabled>
              Idee of suggestie
            </Radio>
          </FieldSet>
          <Paragraph size="small">
            U dient een klacht in als u vindt dat de gemeente Amsterdam u niet netjes heeft behandeld. Lees meer over de
            klachtenprocedure op{" "}
            <Link href="https://amsterdam.nl/klachten" variant="inline">
              amsterdam.nl/klachten
            </Link>
            .
          </Paragraph>
          <Paragraph size="small">
            Een melding openbare ruimte en overlast gaat bijvoorbeeld over afval dat niet is opgehaald, volle
            prullenbakken of containers, een losliggende stoeptegel of een kapotte lantaarnpaal. Ook overlast van horeca
            of personen kunt u melden via een melding openbare ruimte en overlast.
          </Paragraph>
          <div className="ams-form-navigation">
            <Button type="submit">Volgende</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  );
}

export default Contact;

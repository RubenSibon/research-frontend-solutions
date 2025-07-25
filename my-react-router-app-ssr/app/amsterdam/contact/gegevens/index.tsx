import {
  Alert,
  Breadcrumb,
  Button,
  Column,
  Field,
  FieldSet,
  Grid,
  Heading,
  Label,
  Paragraph,
  Radio,
  Row,
  Select,
  TextInput,
} from '@amsterdam/design-system-react';
import { type FormEvent } from 'react';

function Question() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Grid paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Breadcrumb>
          <Breadcrumb.Link href="/amsterdam">Home</Breadcrumb.Link>
        </Breadcrumb>
        <form className="ams-gap-l" onSubmit={handleSubmit}>
          <Heading level={1}>Contact</Heading>
          <FieldSet aria-describedby="contactgegevensDescription" legend="Wat zijn uw contactgegevens?">
            <Column>
              <Paragraph id="contactgegevensDescription">
                Wij hebben uw gegevens nodig om contact met u te kunnen opnemen.
              </Paragraph>
              <Field>
                <Label htmlFor="voorletters">Voorletters</Label>
                <TextInput id="voorletters" name="voorletters" />
              </Field>
              <Field>
                <Label htmlFor="achternaam">Achternaam</Label>
                <TextInput id="achternaam" name="achternaam" />
              </Field>
              <Field>
                <Label htmlFor="email">E-mail</Label>
                <TextInput id="email" name="email" />
              </Field>
              <Row>
                <Field>
                  <Label htmlFor="country">Landnummer</Label>
                  <Select name="country">
                    <option value="+31">Nederland +31</option>
                    <option value="+32">België +32</option>
                    <option value="+33">Frankrijk +33</option>
                  </Select>
                </Field>
                <Field>
                  <Label htmlFor="phone">Telefoonnummer</Label>
                  <TextInput id="phone" name="phone" />
                </Field>
              </Row>
              <Field>
                <Label htmlFor="email">E-mail</Label>
                <TextInput id="email" name="email" />
              </Field>
              <Field>
                <Label htmlFor="woonplaats">Woonplaats</Label>
                <Radio name="woonplaats" value="amsterdam">
                  Amsterdam
                </Radio>
                <Radio name="woonplaats" value="weesp">
                  Weesp
                </Radio>
                <Radio name="woonplaats" value="anders">
                  Anders
                </Radio>
              </Field>
            </Column>
          </FieldSet>
          <Alert heading="Wat doen we met uw gegevens?" headingLevel={2}>
            <Paragraph>
              We bewaren uw contactgegevens voor het afhandelen van uw vraag of klacht en het verbeteren van onze
              dienstverlening.
            </Paragraph>
          </Alert>
          <div className="ams-form-navigation">
            <Button type="submit">Versturen</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  );
}

export default Question;

import {
  Breadcrumb,
  Button,
  CharacterCount,
  Field,
  FileInput,
  Grid,
  Heading,
  Label,
  Paragraph,
  TextArea,
} from '@amsterdam/design-system-react';
import { type FormEvent, useState } from 'react';

function Question() {
  const [textareaLength, setTextareaLength] = useState(0);

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
          <Field>
            <Label htmlFor="body">Wat wilt u aan de gemeente vragen?</Label>
            <Paragraph id="bodyDescription" size="small">
              Een duidelijke beschrijving van uw vraag helpt ons bij het behandelen. U kunt eventueel nog een bijlage
              toevoegen.
            </Paragraph>
            <TextArea
              aria-describedby="bodyDescription"
              id="body"
              onChange={(e) => setTextareaLength(e.target.value.length)}
              rows={4}
            />
            <CharacterCount length={textareaLength} maxLength={1000} />
          </Field>
          <Field>
            <Label htmlFor="fileUpload">U kunt hier een bijlage toevoegen</Label>
            <FileInput accept="image/jpeg,image/jpg,image/png,image/gif" id="fileUpload" multiple name="bijlage" />
          </Field>
          <div className="ams-form-navigation">
            <Button type="submit">Volgende</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  );
}

export default Question;

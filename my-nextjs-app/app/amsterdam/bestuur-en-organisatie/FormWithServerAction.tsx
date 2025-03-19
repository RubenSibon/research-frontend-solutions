"use client";

import { useActionState, useState } from "react";
import { Button, Column, DescriptionList, ErrorMessage, Heading, Row, TextInput } from "@amsterdam/design-system-react";
import { updateName } from "./ServerAction";

function FormWithServerAction({}) {
  const [apiName, setApiName] = useState("");

  const [error, submitAction, isPending] = useActionState(async (previousState, formData) => {
    try {
      await updateName(formData.get("name"));

      setApiName(formData.get("name"));
    } catch (error) {
      return error;
    }

    return null;
  }, null);

  return (
    <Column>
      <Heading level={2}>Form with Server Action/Function</Heading>

      <form action={submitAction}>
        <Row>
          <TextInput name="name" />

          <Button type="submit" disabled={isPending}>
            Update
          </Button>
        </Row>
      </form>

      <DescriptionList>
        <DescriptionList.Term>Current name</DescriptionList.Term>
        <DescriptionList.Description>{isPending ? "Loading name..." : apiName || "n.b."}</DescriptionList.Description>
      </DescriptionList>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Column>
  );
}

export default FormWithServerAction;

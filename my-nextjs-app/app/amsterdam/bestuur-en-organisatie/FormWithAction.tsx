"use client";

import { useActionState, useState } from "react";
import { Button, Column, DescriptionList, ErrorMessage, Heading, Row, TextInput } from "@amsterdam/design-system-react";

function FormWithAction({}) {
  const [apiName, setApiName] = useState("");

  const updateName = async (name: string): Promise<() => void> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(() => setApiName(name)), 3000);
    });
  };

  const [error, submitAction, isPending] = useActionState(async (previousState, formData) => {
    try {
      await updateName(formData.get("name"));
    } catch (error) {
      return error;
    }

    setApiName(formData.get("name"));

    return null;
  }, null);

  return (
    <Column>
      <Heading level={2}>Form with Action and useActionState</Heading>

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

export default FormWithAction;

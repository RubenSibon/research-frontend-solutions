"use client";

import { useState, useTransition } from "react";
import { Button, Column, DescriptionList, ErrorMessage, Heading, Row, TextInput } from "@amsterdam/design-system-react";

function FormWithTransition({}) {
  const [apiName, setApiName] = useState("");
  const [name, setName] = useState(apiName);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const updateName = async (name: string): Promise<() => void> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(() => setApiName(name)), 3000);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    startTransition(async () => {
      const error = await updateName(name);

      if (error) {
        setError(error);
        return;
      }
    });
  };

  return (
    <Column>
      <Heading level={2}>Form with Action and useActionState</Heading>

      <form onSubmit={handleSubmit}>
        <Row>
          <TextInput value={name} onChange={(event) => setName(event.target.value)} />

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

export default FormWithTransition;

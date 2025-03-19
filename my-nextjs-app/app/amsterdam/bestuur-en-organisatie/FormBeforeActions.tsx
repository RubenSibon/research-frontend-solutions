"use client";

import { useState } from "react";
import { Button, Column, DescriptionList, ErrorMessage, Heading, Row, TextInput } from "@amsterdam/design-system-react";

function FormBeforeActions({}) {
  const [apiName, setApiName] = useState("");
  const [name, setName] = useState(apiName);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const updateName = async (name: string): Promise<() => void> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(() => setApiName(name)), 3000);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsPending(true);
    const error = await updateName(name);
    setIsPending(false);

    if (error) {
      setError(error);
      return;
    }
  };

  return (
    <Column>
      <Heading level={2}>Form without Actions</Heading>

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

export default FormBeforeActions;

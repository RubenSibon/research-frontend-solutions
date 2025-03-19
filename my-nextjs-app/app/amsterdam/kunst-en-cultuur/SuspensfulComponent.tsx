import { Heading, Paragraph } from "@amsterdam/design-system-react";
import { Suspense, use } from "react";

const fetchData = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data geladen na 5 seconden."), 5000);
  });
};

const resource = fetchData();

const DataComponent = () => <Paragraph>{use(resource)}</Paragraph>;

function SuspensefulComponent() {
  return (
    <>
      <Heading level={2}>Concurrent rendering</Heading>
      <Suspense fallback={<Paragraph>Loading...</Paragraph>}>
        <DataComponent />
      </Suspense>
    </>
  );
}

export default SuspensefulComponent;

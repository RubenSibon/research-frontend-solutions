import { Heading, Paragraph } from "@amsterdam/design-system-react";
import { Suspense, use } from "react";

const fetchData = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello, React 19!"), 3000);
  });
};

const resource = fetchData();

const DataComponent = () => <Paragraph>{use(resource)}</Paragraph>;

function SuspensefulComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Heading>Concurrent rendering</Heading>
        <DataComponent />
      </div>
    </Suspense>
  );
}

export default SuspensefulComponent;

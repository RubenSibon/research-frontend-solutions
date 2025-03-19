import { createContext, ReactNode, use } from "react";

import { Column, Heading, Paragraph } from "@amsterdam/design-system-react";

const ThemeContext = createContext({
  color: "tomato",
  backgroundColor: "#BADA55",
  padding: "2em",
});

function ReadContextConditionally({ children }: { children?: ReactNode }) {
  if (children === null) {
    return <></>;
  }

  const theme = use(ThemeContext);

  return (
    <Column style={{ ...theme }}>
      <Heading level={3} style={{ color: "inherit" }}>
        This component reads a theme context conditionally with use()
      </Heading>
      <Paragraph style={{ color: "inherit" }}>
        Mollit cupidatat laborum incididunt irure in irure. Eiusmod eiusmod sunt duis in id irure. Voluptate ipsum
        exercitation dolor officia reprehenderit pariatur. Aliquip mollit in deserunt qui elit ipsum nostrud anim. Amet
        irure laborum esse minim est sunt. Pariatur laboris quis fugiat Lorem occaecat cillum in Lorem reprehenderit.
      </Paragraph>
      {children}
    </Column>
  );
}

export default ReadContextConditionally;

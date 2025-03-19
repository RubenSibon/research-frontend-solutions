import { createContext, ReactNode, use } from "react";

import { Column, Heading, Paragraph } from "@amsterdam/design-system-react";

export const ThemeContext = ({
  color = "tomato",
  backgroundColor = "#BADA55",
}: {
  color?: string;
  backgroundColor?: string;
}) => {
  return createContext({
    color,
    backgroundColor,
    padding: "2em",
  });
};

function ReadContextConditionally({
  heading,
  theme,
  children,
}: {
  heading?: string;
  theme?: { color?: string; backgroundColor?: string };
  children?: ReactNode;
}) {
  if (children === null) {
    return <></>;
  }

  const usedThemeContext = use(ThemeContext({ ...theme }));

  return (
    <Column style={{ ...usedThemeContext }}>
      <Heading level={3} style={{ color: "inherit" }}>
        {heading ?? "This component reads a theme context conditionally with use()"}
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

"use client";

import React from "react";

import { Heading, Paragraph } from "@amsterdam/design-system-react";

class OldComponent extends React.Component {
  componentWillMount() {
    console.log("Deprecated lifecycle method");
  }

  render() {
    return (
      <>
        <Heading level={2}>Old fashioned component</Heading>
        <Paragraph>
          Est officia aliqua proident qui ea pariatur id fugiat. Qui est officia elit qui aliquip pariatur ad
          exercitation cillum sint. Reprehenderit nostrud minim sit laboris. Et labore commodo dolor in anim culpa.
          Deserunt pariatur do sit veniam ea nostrud in fugiat dolor sint sit.
        </Paragraph>
      </>
    );
  }
}

export default OldComponent;

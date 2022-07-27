import React, { ReactNode } from "react";
import { useContent } from "../../../contexts/content.context";

interface Props {
  children: ReactNode;
}

const Heading: React.FC<Props> = ({ children }) => {
  const { pageExit, pageLoaded } = useContent();
  return (
    <h1
      className={`text-3xl ${pageExit && !pageLoaded ? "exit" : ""} ${
        pageLoaded && !pageExit ? "init" : ""
      }`}
    >
      {children}
    </h1>
  );
};

export default Heading;

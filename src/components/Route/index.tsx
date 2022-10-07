import React, { ReactElement } from "react";

interface Props {
  path: string;
  component: ReactElement;
}

const Route: React.FC<Props> = ({ component }) => {
  return component;
};
export default Route;

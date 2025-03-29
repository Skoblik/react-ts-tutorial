import { HeadingProps } from "./Heading.types";

export const Heading = (props: HeadingProps) => {
  return <h2>{props.children}</h2>;
};

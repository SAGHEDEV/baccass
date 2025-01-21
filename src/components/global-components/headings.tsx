import { FC, HTMLAttributes } from "react";

interface H1Props extends HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

const H1: FC<H1Props> = ({ className = "", ...props }) => {
  return (
    <h1
      {...props}
      className={`text-5xl lg:text-7xl font-bold ${className}`}
    ></h1>
  );
};
const H2: FC<H1Props> = ({ className = "", ...props }) => {
  return (
    <p
      {...props}
      className={`text-4xl font-semibold lg:text-5xl ${className}`}
    ></p>
  );
};
const H3: FC<H1Props> = ({ className = "", ...props }) => {
  return (
    <p
      {...props}
      className={` font-bold text-2xl lg:text-4xl ${className}`}
    ></p>
  );
};
const P: FC<H1Props> = ({ className = "", ...props }) => {
  return <p {...props} className={` font-medium ${className} text-gray`}></p>;
};
const SP: FC<H1Props> = ({ className = "", ...props }) => {
  return (
    <p {...props} className={` font-medium text-sm ${className} text-gray`}></p>
  );
};

export { H1, H2, H3, P, SP };

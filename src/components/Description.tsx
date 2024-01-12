import React from "react";
type QuestionProps = {
  className?: string;
  children?: React.ReactNode;
};

const Description: React.FC<QuestionProps> = (props) => {
  return (
    <>
      <div className={props.className}>{props.children}</div>
    </>
  );
};

export default Description;

import React from "react";

type QuestionProps = {
  className?: string;
  children?: React.ReactNode;
};

const Question: React.FC<QuestionProps> = function Question(props) {
  return (
    <>
      <div className={props.className}>{props.children}</div>
    </>
  );
};

export default Question;

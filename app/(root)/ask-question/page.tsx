import QuestionForm from "@/components/forms/QuestionForm";
import React from "react";

const AskAQuestion = () => {
  return (
    <div>
      <h1 className="h1-bold text-dark-100_light900 ">Ask a public question</h1>
      <div className="mt-9">
        <QuestionForm />
      </div>
    </div>
  );
};

export default AskAQuestion;

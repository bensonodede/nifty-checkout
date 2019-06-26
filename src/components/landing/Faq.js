import React from "react";

const Faq = props => {
  let { question, answer } = props.location.state.item;
  return (
    <div className="App-container faq__page">
      <h1 className="faq__sub-title">{question}</h1>
      <p className="faq__text">{answer}</p>
    </div>
  );
};

export default Faq;

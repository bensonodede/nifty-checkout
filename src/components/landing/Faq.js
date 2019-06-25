import React from "react";

const Faq = props => {
  let { question, answer } = props.location.state.item;
  return (
    <div className="App-container">
      <h1>FAQ</h1>
      <h1>{question}</h1>
      <p>{answer}</p>
    </div>
  );
};

export default Faq;

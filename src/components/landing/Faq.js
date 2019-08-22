import React from "react";
import { Helmet } from "react-helmet";

const Faq = props => {
  let { question, answer } = props.location.state.item;
  return (
    <div>
      {/* Document title */}
      <Helmet>
        <title>Finn - FAQ</title>
      </Helmet>

      {/* FAQ component */}
      <div className="App-container faq__page">
        <h1 className="faq__sub-title">{question}</h1>
        <p className="faq__text">{answer}</p>
      </div>
    </div>
  );
};

export default Faq;

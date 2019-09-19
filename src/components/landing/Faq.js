import React from "react";
import { Helmet } from "react-helmet";

// Import components
import { Icon } from "react-icons-kit";
import { iosCloseEmpty } from "react-icons-kit/ionicons/iosCloseEmpty";

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
        {/* Close icon */}

        <div className="faq__icon" onClick={() => props.history.goBack()}>
          <Icon icon={iosCloseEmpty} size={"100%"} />
        </div>

        <h1 className="faq__sub-title">{question}</h1>
        <p className="faq__text">{answer}</p>
      </div>
    </div>
  );
};

export default Faq;

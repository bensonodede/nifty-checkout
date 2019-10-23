import React from "react";
import { Helmet } from "react-helmet";

// Import components
import { Icon } from "react-icons-kit";
import { iosCloseEmpty } from "react-icons-kit/ionicons/iosCloseEmpty";

const Faq = props => {
  let { question, answer } = props.location.state.item;
  return (
    <div className="faq">
      <div className="container">
        {/* Document title */}
        <Helmet>
          <title>Finn - FAQ</title>
        </Helmet>

        {/* FAQ component */}
        <div className="columns is-mobile is-multiline is-centered">
          {/* Close icon */}
          <div className="column is-10">
            <div className="faq__icon" onClick={() => props.history.goBack()}>
              <Icon icon={iosCloseEmpty} size={"100%"} />
            </div>
          </div>

          {/* Question and answer */}
          <div className="column is-10">
            <div className="content">
              <h1 className="title is-size-4-mobile is-size-4">{question}</h1>
              <p>{answer}</p>
            </div>
          </div>
          {/* End question and answer */}
        </div>
      </div>
    </div>
  );
};

export default Faq;

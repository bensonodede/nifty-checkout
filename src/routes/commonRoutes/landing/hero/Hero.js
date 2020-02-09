import React, { Component } from "react";

// Import components

// Import styles
import "./styles.scss";

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      particleMount: false
    };
  }
  componentDidMount() {
    // Render particles after 3 seconds
    setTimeout(() => {
      this.setState({ particleMount: true });
    }, 3000);
  }

  render() {
    return (
      <section className="hero is-fullheight">
        {/* Hero head */}
        {/* <div className="hero-head">
          <Navbar />
        </div> */}

        {/* Hero body */}
        <div className="hero-body">
          <div className="container">
            {/* Hero text */}
            <div>
              <h1 className="title is-size-3 has-text-centered">
                Simple, beautiful
                <br />
                checkouts.
              </h1>
              <p className=" is-size-6 has-text-centered has-text-grey-light">
                Let your customers buy anything in one click with M-pesa
              </p>
            </div>

            {/* Hero button */}

            <div className="hero__btn-container">
              <button className="button is-primary is-normal">
                <span className="is-size-6">Get started</span>
              </button>
            </div>

            {/*End hero button */}
          </div>
        </div>
        {/* End hero body */}
      </section>
    );
  }
}

export default Hero;

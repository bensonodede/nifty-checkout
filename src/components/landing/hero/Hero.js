import React, { Component } from "react";
import ScrollReveal from "scrollreveal";

// Import components
import sr from "../../scrollReveal";
import { Particle } from "../../particle";
import { Navbar } from "../../navbar";

// Import styles
import "./styles.scss";

class Hero extends Component {
  constructor(props) {
    super(props);

    // Refs
    this.headerRef = React.createRef();

    this.state = {
      particleMount: false
    };
  }
  componentDidMount() {
    // Configuration for scroll reveal
    const config = {
      reset: true,
      origin: "bottom",
      duration: 1000,
      delay: 200,
      distance: "50%",
      scale: 1,
      easing: "ease"
    };

    // Initialize scroll reveal
    sr.reveal(this.headerRef.current, config);

    // Render particles after 3 seconds
    setTimeout(() => {
      this.setState({ particleMount: true });
    }, 3000);
  }

  render() {
    return (
      <div>
        <section className="hero is-fullheight hero__container">
          {/* Hero head */}
          <div className="hero-head">
            <Navbar />
          </div>

          {/* Hero body */}
          <div className="hero-body">
            <div className="hero__heading-container container is-centered is-vcentered is-5">
              <h1
                ref={this.headerRef}
                className="hero__heading title is-size-3-mobile is-size-2 has-text-centered"
              >
                Simple, beautiful
                <br />
                checkouts.
              </h1>
            </div>
          </div>

          {/* Hero footer */}
          <div className="hero-foot"></div>

          {/* Particles */}
          {this.state.particleMount ? (
            <div className="particle__container">
              <Particle number={1} color={"#9fbfff"} size={8} speed={3.5} />
              <Particle number={3} color={"#ff5e00"} size={8} speed={3.5} />
              <Particle number={3} color={"#3040c4"} size={8} speed={3} />
              <Particle number={2} color={"#f8cf61"} size={8} speed={2.5} />
              <Particle number={1} color={"#FAEBD7"} size={8} speed={2.5} />
            </div>
          ) : null}
        </section>
      </div>
    );
  }
}

export default Hero;

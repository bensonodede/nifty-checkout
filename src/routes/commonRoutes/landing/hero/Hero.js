import React from "react";
import { useInView } from "react-intersection-observer";

// Import components
import { HeroBody, HeroFooter } from "./containers";

// Import styles
import "./styles.scss";

const Hero = ({ featuresRef }) => {
  // Monitor elements in view
  const [ref, inView] = useInView({
    // When 0.8 of section is in view, trigger callback
    threshold: 0.8
  });

  return (
    <section ref={ref} className="hero is-fullheight">
      {/* Hero body */}
      <HeroBody />

      {/* Hero footer */}
      <HeroFooter
        inView={inView}
        // Scroll to feature section
        onClick={() => window.scrollTo(0, featuresRef.current.offsetTop)}
      />
    </section>
  );
};
export default Hero;

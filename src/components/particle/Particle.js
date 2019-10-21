import React from "react";
import Particles from "react-particles-js";

// Import styles
import "./styles.scss";

const Particle = props => (
  <div className="particle__item-wrapper">
    <Particles
      className="particle__item"
      canvasClassName="particle__canvas"
      params={{
        particles: {
          number: {
            value: props.number,
            density: {
              enable: true,
              value_area: props.number * 200
            }
          },
          color: {
            value: props.color
          },
          opacity: {
            value: 1,
            random: false,
            anim: {
              enable: false
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            speed: props.speed,
            direction: "top",
            straight: true,
            out_mode: "out"
          },
          shape: {
            type: ["images", "circle"],
            images: [
              {
                src: "../../../images/particle-red.svg",
                height: 10,
                width: 10
              }
            ]
          },
          size: {
            value: props.size,
            random: true,
            anim: {
              enable: false,
              size_min: props.size,
              speed: 1
            }
          }
        },
        //
        retina_detect: true
      }}
    />
  </div>
);

export default Particle;

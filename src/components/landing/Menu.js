import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  // Handle menu open
  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.open });
  }

  // Toggle menu function
  toggleMenu() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    // Destructure state
    let { open } = this.state;

    return (
      <div>
        {open ? (
          <div className="menu ">
            <p onClick={() => this.toggleMenu()}>close</p>
            <p>Home</p>
            <p>Pricing</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Menu;

import { Component } from "react";
import PropTypes from "prop-types";

import { Button, Counter } from "../../components";
import "./landingPage.css";

// propTypes declearations
const propTypes = {
  dispatch: PropTypes.func,
  count: PropTypes.number.isRequired,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  add: PropTypes.func,
  sub: PropTypes.func,
};

const defaultType = {
  count: "",
  increment: () => null,
  decrement: () => null,
  add: () => null,
  sub: () => null,
};

class LandingPage extends Component {
  // react life cycle
  componentDidMount() {
    console.log("Component is render for first.");
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props.count) {
      console.log("Component is Updated");
    }
  }
  
  // onclick control garne fucntion
  increment = () => {
    this.props.add();
  };

  decrement = () => {
    this.props.sub();
  };

  render() {
    return (
      <>
        <div className="landing-page-wrapper">
          <div className="counter-wrapper">
            <Counter count={this.props.count} />
          </div>
          <div className="button-section">
            <Button
              className="btn btn-increment"
              title="Increment + "
              onClick={this.increment}
            />
            <Button
              className="btn btn-decrement"
              title="Decrement - "
              onClick={this.decrement}
            />
          </div>
        </div>
      </>
    );
  }
}

LandingPage.propTypes = propTypes;

LandingPage.defaultType = defaultType;

export default LandingPage;

import PropTypes from "prop-types";
import { Component } from "react";

import "./counter.css";
const propTypes = {
  count: PropTypes.number,
};

const defaultTypes = {
  count: 0,
};
class Counter extends Component {
  render() {
    return (
      <>
        <div className="counter-wrapper">
          <h3>{this.props.count}</h3>
        </div>
      </>
    );
  }
}

Counter.propTypes = propTypes;

Counter.defaultTypes = defaultTypes;

export default Counter;

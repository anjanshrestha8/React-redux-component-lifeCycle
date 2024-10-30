import PropTypes from "prop-types";
import { Component } from "react";

import "./button.css";

const propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

const defaultTypes = {
  title: "ButtonName",
  onClick: () => null,
  className: "",
};

class Button extends Component {
  render() {
    return (
      <>
        <div className="button-wrapper">
          <button className={this.props.className} onClick={this.props.onClick}>
            {this.props.title}
          </button>
        </div>
      </>
    );
  }
}

Button.propTypes = propTypes;

Button.defaultTypes = defaultTypes;

export default Button;

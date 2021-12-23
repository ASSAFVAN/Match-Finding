import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div>
        <button
          className="btn"
          name={this.props.name}
          onClick={this.props.handleClick}
        >
          {this.props.btnText}
        </button>
      </div>
    );
  }
}

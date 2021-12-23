import React, { Component } from "react";
import Button from "./components/Button";
import Data from "./data";
import "./App.css";

export default class App extends Component {
  state = { data: Data, likesCounter: 0, dislikesCounter: 0, index: 0 };

  addToCounter = (counter) => {
    if (this.state.index > this.state.data.length - 1) {
      console.log("end of the road");
      this.setState({ index: 0 });
    } else {
      this.setState({
        [counter]: this.state[counter] + 1,
        index: this.state.index + 1,
      });
    }
    console.log(this.state.index);
  };

  displayImage = () => {
    if (this.state.index > this.state.data.length - 1) {
      this.setState({ index: 0 });
    } else {
      return (
        <div>
          <img src={`${this.state.data[this.state.index].image}`}></img>
          <p>{this.state.data[this.state.index].name}</p>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div className="app-container">
          <div className="labels-container">
            <label>{this.state.likesCounter}</label>
            <label>{this.state.dislikesCounter}</label>
          </div>
          <div>{this.state.data && this.displayImage()}</div>
          <div className="btn-container">
            <Button
              btnText="Like"
              handleClick={() => this.addToCounter("likesCounter")}
            />
            <Button
              btnText="disLike"
              handleClick={() => this.addToCounter("dislikesCounter")}
            />
          </div>
        </div>
      </div>
    );
  }
}

import React from "react";
import PropTypes from "prop-types";

class ExampleTimer extends React.Component {
  state = {
    count: 0
  }
  
  increaseCount() {
    console.log(`we are increasing the count to ${this.state.count+1}`)

    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        Count: { this.state.count }

        <br/>

        <button onClick={this.increaseCount.bind(this)}>
          Increase Count
        </button>
      </div>
    );
  }
}

export default ExampleTimer;
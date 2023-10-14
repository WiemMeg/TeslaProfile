import React, { Component } from "react";

export default class TeslaProfile extends Component {
  state = {
    name: "NicolasTesla",
    birth: 1882,
    death: 1950,
    imgSrc:
      "https://th.bing.com/th/id/OIP.Tg8zbUri37u-5IsynqNrcAHaEn?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    profession: "phisician",
    intervall: null,
    counter: 0,
    count: 0,
  };
  componentDidMount() {
    this.setState({
      intervall: setInterval(
        () => this.setState({ counter: this.state.counter + 1 }),
        1000
      ),
    });
  }
  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div>
        <h1>Counter {this.state.counter}</h1>
        <h1>name {this.state.name}</h1>
        <h1>birth {this.state.birth}</h1>
        <h1>death {this.state.death}</h1>
        <img src={this.state.imgSrc} />
        <h1>profession {this.state.profession}</h1>

        <div onClick={this.decrement}>-</div>
        <h1>{this.state.count}</h1>
        <div onClick={this.increment}>+</div>
      </div>
    );
  }
}

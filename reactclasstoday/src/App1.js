import { Component } from 'react'

class App extends Component {

  state = {
    count: 0
  }

  handleIncrementCount = () => {
    this.setState({ count: this.state.count + 1})
  }

  handleDecreasedCount = () => {
    this.setState({ count: this.state.count - 8})
  }

  handleMultipliedBy7Count = () => {
    this.setState({ count: this.state.count * 7})
  }

  handleCountReset = () => {
    this.setState({ count: 0})
  }

  render () {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrementCount}>Click Me</button>
        <button onClick={this.handleDecreasedCount}>Click Me Again</button>
        <button onClick={this.handleMultipliedBy7Count}>Click Me Harder</button>
        <button onClick={this.handleCountReset}>What?</button>
      </div>
    )
  }
}

export default App;

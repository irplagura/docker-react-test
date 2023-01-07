import React from 'react';
import './App.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
  }

  incrementScore = () => {
    this.setState({
      score: this.state.score + 1
    });
  }

  render() {
    return (
      <div className="game">
        <h1 className="score">Score: {this.state.score}</h1>
        <button onClick={this.incrementScore}>Increment</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;


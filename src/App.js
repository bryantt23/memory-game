import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      array: this.getArray(),
      mostConsecutiveGuesses: 0,
      uniqueSelections: 0
    };
  }

  getArray() {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
      arr.push(i);
    }
    return arr;
  }

  shuffle() {
    let array = this.state.array;
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({ array: [...array] });

    return array;
  }

  render() {
    const arr = JSON.stringify(this.state.array);
    return (
      <div className='App'>
        <button onClick={() => this.shuffle()}>Shuffle</button>
        <p>{arr}</p>
        hiiii
      </div>
    );
  }
}

export default App;

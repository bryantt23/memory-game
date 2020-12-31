import { Component } from 'react';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import image7 from './images/7.jpg';
import image8 from './images/8.jpg';
import image9 from './images/9.jpg';
import image10 from './images/10.jpg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      array: this.getArray(),
      mostConsecutiveGuesses: 0,
      uniqueSelections: new Set(),
      youWonGame: false
    };
  }

  getArray() {
    return [
      { balloonNumber: 1, src: image1 },
      { balloonNumber: 2, src: image2 },
      { balloonNumber: 3, src: image3 },
      { balloonNumber: 4, src: image4 },
      { balloonNumber: 5, src: image5 },
      { balloonNumber: 6, src: image6 },
      { balloonNumber: 7, src: image7 },
      { balloonNumber: 8, src: image8 },
      { balloonNumber: 9, src: image9 },
      { balloonNumber: 10, src: image10 }
    ];
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

  checkGameState = indexSelected => {
    const previousGuesses = this.state.uniqueSelections;
    if (!previousGuesses.has(indexSelected)) {
      previousGuesses.add(indexSelected);
      this.setState({
        uniqueSelections: previousGuesses
      });
      if (previousGuesses.size > this.state.mostConsecutiveGuesses) {
        this.setState({ mostConsecutiveGuesses: previousGuesses.size });
      }
      if (previousGuesses.size === this.state.array.length) {
        this.setState({ youWonGame: true });
      }
    } else {
      let newSet = new Set();
      newSet.add(indexSelected);
      this.setState({
        uniqueSelections: newSet
      });
    }
  };

  getImages = e => {
    const arr = this.state.array;
    return arr.map(obj => (
      <img
        alt='blah'
        a-key={obj.balloonNumber}
        src={obj.src}
        key={obj.balloonNumber}
        onClick={() => {
          this.shuffle();
          this.checkGameState(obj.balloonNumber);
        }}
      />
    ));
  };

  render() {
    console.log(this.state.uniqueSelections);
    const images = this.getImages();
    return (
      <div className='App'>
        {!this.state.youWonGame ? (
          <div>
            <h1>Memory Game</h1>
            <p>
              To win only click on an item you have not clicked on before. If
              you click on an item twice the count restarts. If you click on all
              10 without clicking on an balloon twice you win.
            </p>
            <p>Current correct guesses: {this.state.uniqueSelections.size}</p>
            <p>Most correct guesses: {this.state.mostConsecutiveGuesses}</p>

            {images}
          </div>
        ) : (
          <div>
            <h1>You won!!!</h1>
          </div>
        )}
      </div>
    );
  }
}

export default App;

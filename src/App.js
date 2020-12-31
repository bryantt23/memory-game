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
      uniqueSelections: 0
    };
  }

  getArray() {
    return [
      { index: 0, src: image1 },
      { index: 1, src: image2 },
      { index: 2, src: image3 },
      { index: 3, src: image4 },
      { index: 4, src: image5 },
      { index: 5, src: image6 },
      { index: 6, src: image7 },
      { index: 7, src: image8 },
      { index: 8, src: image9 },
      { index: 9, src: image10 }
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

  functionCall = event => {
    console.log(event.target.getAttribute('a-key'));
  };
  print(index) {
    console.log(index);
  }

  getImages = e => {
    const arr = this.state.array;
    return arr.map(obj => (
      <img
        a-key={obj.index}
        src={obj.src}
        key={obj.index}
        onClick={() => {
          this.print(obj.index);
          // this.functionCall();
          this.shuffle();
        }}
      />
    ));
  };

  render() {
    const images = this.getImages();
    const arr = JSON.stringify(this.state);
    return (
      <div className='App'>
        <button onClick={() => this.shuffle()}>Shuffle</button>
        <p>{arr}</p>
        {images}
      </div>
    );
  }
}

export default App;

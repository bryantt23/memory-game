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
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10
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

  getImages = () => {
    const arr = this.state.array;

    return arr.map(index => <img src={index} />);
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

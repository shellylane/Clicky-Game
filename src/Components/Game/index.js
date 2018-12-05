import React from "react";
import data from "../../data.json";
import clicked from "../../data.json"
import shuffle from "shuffle-array"
import Navbar from "../Navbar";
import GameCard from "../GameCard";
import './index.css'
console.log(clicked)

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      data,
      score: 0,
      topScore: 0,
      result: "Click an Image to Begin!"
    };
    console.log(data);
  }

  alreadyGuessed = [];


  handleImageClick = id => {
    const { data } = this.state;
    // console.log(id);
    data.forEach(item => {
      if (id === item.id) {
        item.clicked = true;
      }
    });
    this.setState({ data });


    console.log(id)

    if (this.alreadyGuessed.includes(id)){
      this.alreadyGuessed = [];
      this.setState({score: 0})
      this.setState({data: shuffle(this.state.data)})
      this.setState({result: "Wrong Answer!"})
    } else {
      this.alreadyGuessed.push(id);
      this.setState({ score: this.state.score + 1 });
      this.setState({result: "You Guessed Correctly!"})
      // this.setState({ topScore: this.state.score + 1 });
      if ((this.state.score) >= (this.state.topScore)){
        this.setState({topScore: this.state.score + 1})
      }
      this.setState({ data: shuffle(this.state.data) });
      this.setState({ data: shuffle(this.state.data) });
    }
    
  }

render() {
    const {
      data,
      score,
      topScore,
      result
    } = this.state;

    return (
      <div>
        <Navbar result={result} score={score} topScore={topScore} />

        <div className="container">
        <div className="row">
          <h2 className="mx-auto">Click on an image to earn points, but don't click on any more than once.</h2>
        </div>
        <div className= "row" >
          {data.map(item => (
            <GameCard
              handleImageClick={this.handleImageClick}
              key={item.id} {...item}
            />)
          )}
        </div> 
        </div>  
      </div>
    );
  }
}

export default Game;
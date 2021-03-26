import React, { Component } from "react";
import Header from "./components/Header";
import recettes from "./recettes";
import Admin from "./components/Admin";
import Card from "./components/Card";
// CSS
import "./App.css";
import { createReadStream } from "fs";

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  };
  chargerExemple = () => this.setState({ recettes });
  render() {
    const cards = Object.keys(this.state.recettes)
                         .map(key =><Card key={key}details={this.state.recettes[key]}></Card>)
    console.log(cards);
    return (
      <div className="box">
        <Header pseudo={this.state.pseudo} />
        <div className="cards">
          <div className="card">
          {cards}
          </div>
        </div>
        <Admin chargerExemple={this.chargerExemple}></Admin>
      </div>
    );
  }
}

export default App;

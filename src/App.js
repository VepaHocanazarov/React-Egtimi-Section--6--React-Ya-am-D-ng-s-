
import './App.css';
import React, { Component } from "react";

class App extends Component {

  constructor(props) {

    console.log("Constructor");
    super(props);
    this.state = {
      favoritecolor: "red"
    }
  }

  componentWillMount = () => {  // Artık kullanılan ve tavsiye edilen bir yöntem degil, render den önce çalişir...
    console.log("WillMount")
  };

  componentDidMount() {
    console.log("DidMount");  // render den sonra calısır ve setTimeout ile zaman belirterek otomatik render yapabilmekteyiz örnek aşagıda.

    setTimeout(() => {
      this.setState({
        favoritecolor: "blue"
      })
    },2000
    )
  }


  render() {

    console.log("Render calişti")

    return (
      <div className="App">

        <h1>My favorite color is {this.state.favoritecolor} </h1>

      </div>
    );
  }
}


export default App;

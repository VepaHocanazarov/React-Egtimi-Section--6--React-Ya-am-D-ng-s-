
import './App.css';
import React,{Component} from "react";

class App extends Component {

  constructor(props){

    console.log("Constructor");
    super(props);
    this.state = {
      favoritecolor : "red"
    }
  }

  componentWillMount = () => {  // Artık kullanılan ve tavsiye edilen bir yöntem degil...
    console.log("Selam")
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

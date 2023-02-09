
import './App.css';
import React,{Component} from "react";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      favoritecolor : "red"
    }
  }

  render() {

    return (
      <div className="App">

        <h1>My favorite color is {this.state.favoritecolor} </h1>

      </div>
    );
  }
}


export default App;

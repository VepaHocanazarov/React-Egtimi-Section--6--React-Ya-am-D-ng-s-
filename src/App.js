
import './App.css';
import React, { Component } from "react";
import Child from './Child';

class App extends Component {

  state = {
    tl: 0
  }

  change = (e) =>{
    this.setState({
    tl:e.target.value
    })
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log("shouldComponentUpdate",nextProps,nextState);
    return (nextState.tl % 10 ) === 0;  
  }

  componentWillUpdate(nextProps, nextState){
     console.log("componentWillUpdate",nextProps,nextState);  // shouldComponentUpdate'den sonra calışır
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("componentDisUpdate",prevProps,prevState);   // renderden sonra çalısır ve birönceki state degerini basıyor.
  };
  
  

  render() {

    console.log("Render calişti")

    return (
      <div className="App">

        <input name='tl' id='tl' onChange={this.change} placeholder='Lütfen bir deger giriniz' />
        <br />
        <br />

        <h2> Portakal Fiyati 10 tl</h2>
        <h1> {this.state.tl  / 10} kg portakal alabilirsiniz </h1>



      </div>
    );
  }
}


export default App;

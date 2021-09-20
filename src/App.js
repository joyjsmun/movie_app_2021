import React from "react"
import PropTypes from "prop-types";


class App extends React.Component{
  state = {
    count: 0
  };
  add = () => { console.log("ADD")};
  minus = () =>{ console.log("Minus")}

  render(){
    return (
      <div>
        <h1>The Number is: {this.state.counte}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}




export default App;

import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Component1 from './component/component1'

class App extends React.Component {
  arr = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0, '/', '=', 'c'];
  buttons = this.arr.map((x) => <button onClick={() => this.clickfunc(x)} key={x.toString()} >{x}</button>);
  constructor(probs) {
    super(probs);
    this.state = { value: "" };
  }
  clickfunc(x) {
    if (x === 'c') {
      this.setState({ value: "" });
    }
    else if (x !== '=') {
      this.setState({ value: this.state.value + x });
    }
    else {
      if (this.state.value) {
        try {
          this.setState({ value: eval(this.state.value) });
        } catch (e) {
          this.setState({ value: "" });
          window.alert("syntax error");
        }
      }
    }
    setTimeout(()=> this.props.display(this.state.value),0)
   
  }
  render() {
    return (
      <div>
        <div className="board1">
          <input type="text" value={this.state.value} disabled ></input>
        </div>
        <div className="board">
          {this.buttons}
        </div>
        <Component1/>
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => ({
  display: (data) => { dispatch({ sometext: data ,type: 'DISPLAY' }) }
})


export default connect(null, mapDispatchToProps)(App)


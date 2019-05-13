import React from 'react';
import './App.css';
class App extends React.Component{
  arr = [1,2,3,'+',4,5,6,'-',7,8,9,'*',0,'/','=','c'];
  buttons = this.arr.map((x) => <button onClick={() => this.clickfunc(x)} key = {x.toString()} >{x}</button> );
  constructor(probs) {
    super(probs);
    this.state = {value : ""};
  }
  clickfunc(x){
    if(x === 'c'){
          this.setState({value : ""});
    }
    else if(x !== '=') {
            this.setState({value : this.state.value + x});
    }
    else{
          if(this.state.value){
            this.setState({value : eval(this.state.value)});
          }
    }

  }
render(){
  return (
    <div>
      <div className="board1">
        <input type="text" value={this.state.value} disabled ></input>
      </div>
      <div className="board">
        {this.buttons}
      </div>
    </div>
  );
}
 }

export default App;

import React, { Component } from 'react';
import './App.scss';

export class App extends Component {

  onClik = () => {
    console.log("onclick call") // for testing eslint remoce comments
  }

  render() {
    return (
            <div>
              <p>Hello React App!!!</p>
              <button type="button" className="btn btn-primary" onClick={this.onClik}>Button</button>
            </div>
    );
  }
}
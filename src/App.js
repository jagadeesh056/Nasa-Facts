import { Component } from 'react';

import Title from './Title/title';
import Background from './Background/background'
import Grid from './Grid/grid'
import Rocket from './Rocket/rocket'
import Smoke from './Rocket/smoke'
import facts from './Data/NASA_facts.json'

import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
      this.state = {facts}
  }

  updateCliked(id) {
    let stateCopy = Object.assign({}, this.state)
    stateCopy.facts[id].clicked = true
    this.setState(stateCopy)
  }

  render() {
    return (
    <div className="App">
      <Title />
      <Background />
      <Grid facts={this.state.facts} updateCliked={this.updateCliked.bind(this)} />
      <Rocket />
      <Smoke />
    </div>
    )
  }
}

export default App;

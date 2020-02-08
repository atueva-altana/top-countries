import React from 'react'
import MainContainer from './MainContainer'
import Year from './Year'
import {data} from './data/countries'
import './index.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        year: 0,
        stopped: false
    }
  }

  getYear = (year) => {
    this.setState({ year: year })
  }

  getButton = (button) => {
    this.setState({ stopped: button })
  }

  render() {
    return(
      <div>
        <div className="main">
          <MainContainer  arr={data} getYear={this.getYear} value={this.state.stopped}/>
        </div>
        <div className="year">
          <Year  year={this.state.year} getButton={this.getButton}/>
        </div>
      </div>
    )
  }
}

export default App









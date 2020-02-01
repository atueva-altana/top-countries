import React from 'react'
import MainContainer from './MainContainer'
import {data} from './data/countries'

class App extends React.Component {
  render() {
    return(
      <div>
        <MainContainer arr={data} />
      </div>
    )
  }
}

export default App









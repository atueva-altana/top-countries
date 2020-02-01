import React from 'react'
import PopCountries from './PopCountries'
import Header from './Header'
import { data } from './data/countries'

class MainContainer extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { data } = this.props.arr
        return (
            <div>
                <Header />
                <PopCountries arr={data}/>
            </div>
        )
    }
}

export default MainContainer
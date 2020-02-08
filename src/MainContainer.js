import React from 'react'
import PopCountries from './PopCountries'
import Header from './Header'


class MainContainer extends React.Component {

    render() {
        console.log("flag:", this.props.value)
        return (
            <div>
                <Header />
                <PopCountries getYear={this.props.getYear} value={this.props.value} />
            </div>
        )
    }
}

export default MainContainer
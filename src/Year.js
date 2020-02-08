import React from 'react'

class Year extends React.Component {
    state = {
        stopped: false
    }

    handleClick = () => {
        this.setState({ stopped: !this.state.stopped }, () => {
            this.props.getButton(this.state.stopped)
        })
    }

    render() {
        const {year} = this.props
        let buttonOn = this.state.stopped ? "Start" : "Stop"
        return <div>
            <p >{ year }</p>
            <button onClick={this.handleClick}>{buttonOn}</button>
        </div>
    }
}
export default Year 
import React from 'react'
import Country from './Country'
import { data } from './data/countries'

class PopCountries extends React.Component {
    constructor(){
        super()
        this.state = {
            stopped: false,
            dataForYear: [],
            year: 0
        }
    }
    
    componentDidMount() {
        let arr = data.data
        this.start(arr)
    }
    
    clicked = () => this.setState({ stopped: !this.state.stopped })
    
    sleep = async  (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    start = async (arr) => {
        for(const item of arr) {
            let dataForYear = item.countries.sort((a, b) => b.pop - a.pop)
            this.setState({ dataForYear: dataForYear, year: item.year })
            await this.sleep(1000)
            while (this.state.stopped === true){
                await this.sleep(100)
            }
        }
    }

    showCountries = () => {
        return <div>
            {
                this.state.dataForYear.map((el, i) => {
                    return <Country key={i} country={el} />
                })
            }
        </div>
    }
         
    render() {
        let buttonOn = this.state.stopped ? "Start" : "Stop"
        // console.log(this.state.year, this.state.dataForYear)
        return <div>
            <button onClick = {this.clicked}>{buttonOn}</button>
            {this.showCountries()}

        </div>
    }
}

export default PopCountries
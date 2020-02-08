import React from 'react'
import Country from './Country'
import { data } from './data/countries'

class PopCountries extends React.Component {
    constructor(){
        super()
        this.state = {
            dataForYear: [],
            year: 0
        }
    }
    
    componentDidMount() {
        let arr = data.data
        this.start(arr)
    }
    
    sleep = async  (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    start = async (arr) => {
        for(const item of arr) {
            this.props.getYear(item.year)
            let dataThisYear = item.countries.sort((a, b) => b.pop - a.pop)
            let dataForYear = dataThisYear.slice(0, 15)
            this.setState({ dataForYear: dataForYear, year: item.year })
            await this.sleep(500)
            while (this.props.value === true){
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
        return <div>
            {this.showCountries()}
        </div>
    }
}

export default PopCountries

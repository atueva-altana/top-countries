import React from 'react'
import './index.css'

const Country = ({ country }) => {
    // console.log(year, country)
    return <div className="grid">
        <div className="flag">
            <img
                src={require("" + country.flag)}
                alt="Logo"
            />
        </div>
        <div className="rect" style={{ 
            height: '32px', 
            width: 100 + country.pop , 
            backgroundColor: country.color 
        }}>
            {country.name}
            
        </div>
        <div className="pop" >
            {country.pop}
        </div> 
    </div>
}






export default Country
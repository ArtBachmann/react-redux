import './DisplaySeason.css'
import React from 'react'

const seasonConfig = {
  summer: {
    text: 'ujumaaa..',
    iconName: 'sun'
  },
  winter: {
    text: 'jope selga',
    iconName: 'winter'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const DisplaySeason = (props) => {
  const season = getSeason(props.lat, new Date().getMonth())
  const { text, iconName } = seasonConfig[season] // destructuring..
  
  return (
    <div className={`season-display ${season}`}>
      < i className={`${iconName} icon `} />
     <h1>{text}</h1> 
     < i className={`${iconName} icon `} />
    </div>
  )
}

export default DisplaySeason

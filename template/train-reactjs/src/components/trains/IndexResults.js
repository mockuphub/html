import React from 'react';
import Filter from '../trains/Filter';
import AvailTrain from '../trains/AvailTrains';

class IndexResults extends React.Component {
  
  render() {
    return (

    <section id="content">    
    <div className="container">
        <Filter />
        <AvailTrain />
    </div>
    </section>
    )
}
}
    

export default IndexResults
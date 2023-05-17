import React from 'react';
import {House} from './House'
import { housesApi } from '../HousesApi';

export default class HousesList extends React.Component {
    state ={
        houses: []
    };

    componentDidMount(){
        this.fetchHouses();
    };

    // asynchronous function that uses get method from HouseApi to retrieve values for houses
    fetchHouses = async () => {
        const houses = await housesApi.get();
        this.setState({houses}) // sets state equal to values from Api.
    };

    //function to update each house 
    updateHouse = async (updatedHouse) => {
      await housesApi.put(updatedHouse);
      this.fetchHouses();  
    };

    render(){
        return(
            <div className='house-list'>
                {/* map each house from state houses & then create an instance of house.  passed the house as a prop to itself for mapping. Passed down updateHouse method for future call downs from a child*/}
                {this.state.houses.map((house) => (
                    <House
                        house={house}
                        key={house.id}
                        updateHouse={this.updateHouse}
                    />
                ))}
            </div>
        )
    }
}
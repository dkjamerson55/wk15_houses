import React from "react";
import {NewRoomForm} from './NewRoomForm'

//functional component
export const House = (props) => {
    const {house, updateHouse} = props;

    //function to delete room and then update
    const deleteRoom = (roomId) => {

        // variable that is a new object, that spreads the house
        const updatedHouse = {
            ...house, 
            //filter throught rooms(x) for id to delete specific room 
            rooms: house.rooms.filter((x) => x.id !==roomId)
        };
        updateHouse(updatedHouse); //prop that calls 'PUT' method from HouseApi to update the database
    }

    const addNewRoom = (room) => updateHouse({...house, rooms: [...house.rooms, room]});
        //creating new array with new room using values from previous array using spread operator to add that additional room and returning it

    //creating new component for rooms since it is a part of house
    const rooms = () => {
        <ul>
            {house.rooms.map((room, index) => (
                <li key= {index}>
                    <label>{`${room.name} Area: ${room.area}`}</label>
                    <button onClick={(e) => deleteRoom(room.id)}>Delete</button>
                </li>
            ))}
        </ul>
    };

    return (
        <div>
            <h1>{house.name}</h1>
            {
                rooms({rooms, houseId: house.id, deleteRoom}) //rooms with props being passed into it
            }
            <NewRoomForm addNewRoom= {addNewRoom}/>
        </div>
    );
        
    
};
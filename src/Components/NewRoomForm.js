import React, {useState} from 'react'

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);

    //handleAreaInput used to ensure a number has been input by user
    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        //as long as int is >= 0 pass it in otherwise just pass an empty string
        setArea(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // if name and area are true, not false then pass props and addNewRoom method
        if (name && area) {
            props.addNewRoom({name,area});
            setName('');
            setArea('');
        } else {
            console.log('invalid input');
        }
    };

    return(
        <div>
            <h4>Add a new Room</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='name'
                    //when text changes call setName method and set it to equal to target value
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <input
                    type='text'
                    placeholder='area'
                    onChange={handleAreaInput}
                    value={area}
                />

                <button type='submit'>Add Room</button>
            </form>
        </div>
    )
}
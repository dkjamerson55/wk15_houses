const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/'

//a get and update method to add new houses, rooms and then update them
class HousesAPI {
    get = async () =>{
        //try catch block for handling network call errors
        try{
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data;
        }catch(e) {
            console.log('issue with fetchHouses', e);
        }
    }

    put = async (house) => {
        try{
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house.id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application.json'},
                body: JSON.stringify(house)
            });
            return await resp.json();
        }catch(e){
            console.log('issue with updating houses')
        }
    }
}

export const housesApi = new HousesAPI();
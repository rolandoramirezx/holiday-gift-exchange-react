import NavBar from './NavBar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PlantCard from './PlantCard';
import { CardDeck } from 'react-bootstrap';

export default function Home() {

    const [plants, setPlants] = useState([]);

    function getPlants() {
        axios.get('/user-plants.json')
            .then(function (response) {
                // handle success
                console.log(response);
                setPlants(response.data.plants);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    useEffect(() => {
        getPlants();
    }, [])

    return (
        <div>
            <NavBar />
            <h1 className="d-flex justify-content-center">Welcome home!</h1>
            <p className="d-flex justify-content-center">Your plants are included below. Happy planting!</p>
            <div className="d-flex justify-content-center">
                <CardDeck>
                    {plants.map((plant) =>
                        <PlantCard name={plant.name} description={plant.description} image={plant.image}></PlantCard>
                    )}
                </CardDeck>
            </div>
        </div>
    )
}
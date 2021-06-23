import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Geocode from "react-geocode";


class ArLocation5 extends Component {
    state = {
        loading: true,
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        mapCenter: {
            lat: -12.0647762,
            lng: -77.0165612,
        },
        stores: []
    };

    componentDidMount() {
        //this.get_data_stores();
        this.setState({
            stores: [
                {
                    "id": 1,
                    "name": "Victors Nombre Comercial",
                    "adress": "Av. Agustin Gamarra 140",
                    "latitude": -12.0641762,
                    "longitude": -77.1525624
                },
                {
                    "id": 2,
                    "name": "Kayser",
                    "adress": "Av Agustin Gamarra 650",
                    "latitude": -12.0665232,
                    "longitude": -77.01325109999999
                },
                {
                    "id": 3,
                    "name": "Mya Line",
                    "adress": "Av. Agustin Gamarra 1103",
                    "latitude": -12.0695634,
                    "longitude": -77.0128069
                },
                {
                    "id": 4,
                    "name": "Mya Line",
                    "adress": "Av Agustin Gamarra 1105",
                    "latitude": -12.0694625,
                    "longitude": -77.0127509
                },
                {
                    "id": 5,
                    "name": "Pioner",
                    "adress": "Av Agustin Gamarra 445",
                    "latitude": -12.0652889,
                    "longitude": -77.154501
                },
                {
                    "id": 6,
                    "name": "Bata",
                    "adress": "Av. Agustin Gamarra 1017",
                    "latitude": -12.0684229,
                    "longitude": -77.0128529
                },
                {
                    "id": 7,
                    "name": "Kayser",
                    "adress": "Av. La Mar 2225 - San Miguel",
                    "latitude": -12.0750562,
                    "longitude": -77.08071819999999
                },
                {
                    "id": 8,
                    "name": "Bata",
                    "adress": "Av. La Marina 2000, San Miguel",
                    "latitude": -12.0761542,
                    "longitude": -77.083643
                },
                {
                    "id": 9,
                    "name": "Bata",
                    "adress": "Jiron Jose Galvez 522 - B",
                    "latitude": -12.0903509,
                    "longitude": -77.07283799999999
                },
                {
                    "id": 10,
                    "name": "Bata",
                    "adress": "Av. La Mar 2275, San Miguel",
                    "latitude": -12.0749941,
                    "longitude": -77.08168979999999
                },
                {
                    "id": 11,
                    "name": "Victors Nombre Comercial",
                    "adress": "Av. Las Carmelias 234",
                    "latitude": -12.0931147,
                    "longitude": -77.0293717
                },
                {
                    "id": 12,
                    "name": "Angelas Flowers",
                    "adress": "Av. Las Carmelias 234",
                    "latitude": -12.0931147,
                    "longitude": -77.0293717
                },
                {
                    "id": 13,
                    "name": "Victors Nombre Comercial",
                    "adress": "Av. Las Carmelias 234",
                    "latitude": -12.0931147,
                    "longitude": -77.0293717
                },
                {
                    "id": 14,
                    "name": "Victors Nombre Comercial",
                    "adress": "Av. Las Carmelias 234",
                    "latitude": -12.0931147,
                    "longitude": -77.0293717
                },
                {
                    "id": 15,
                    "name": "Angelas Flowers",
                    "adress": "Av. Las Carmelias 234",
                    "latitude": -12.0931147,
                    "longitude": -77.0293717
                },
                {
                    "id": 16,
                    "name": "Develogers",
                    "adress": "Av Wiesse",
                    "latitude": -11.9654429,
                    "longitude": -76.9942375
                },
                {
                    "id": 17,
                    "name": "Abraham Store",
                    "adress": "Av. Universitaria",
                    "latitude": -12.0751071,
                    "longitude": -77.0803832
                }
            ],
            loading: false
        })
    }

    get_data_stores() {
        const url = 'https://gamarraappserviceapi.azurewebsites.net/api/Usuario/ListUsuariosByCoordenadas/200/200';
        fetch(url).then(res => res.json()).then(data => {
            const stores = data['usuariosRolTiendaByQuery']
            console.log(stores);
            stores.push({
                "direccion_Direccion": "3905 Auxiliar Av. Fernando Wiesse, San Juan de Lurigancho, Municipalidad Metropolitana de Lima", "nombresComercial": "Develogers"
            })
            this.get_stores(stores).then(data => {
                this.setState({ stores: data, loading: false })
            })
        })
    }
    async get_location_from_adress(adress) {
        // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
        Geocode.setApiKey("AIzaSyB-AIzaSyAwO1y7_y1hk2V9HR1FNCyQFB1JjdCVzk8");

        // set response language. Defaults to english.
        Geocode.setLanguage("es");

        // set response region. Its optional.
        // A Geocoding request with region=es (Spain) will return the Spanish city.
        Geocode.setRegion("pe");
        // Get latitude & longitude from address.
        return await Geocode.fromAddress(adress)
    }
    async get_stores(data_stores) {
        var id = 1;
        var stores = [];
        for (const store of data_stores) {
            const adress = store['direccion_Direccion']
            console.log(adress);
            var response = await this.get_location_from_adress(adress);
            console.log(response);
            const { lat, lng } = response.results[0].geometry.location;
            console.log(lat, lng);
            stores.push(
                {
                    'id': id,
                    'name': store['nombresComercial'],
                    'adress': adress,
                    'latitude': lat,
                    'longitude': lng
                }
            )
            id++;

        }
        console.log(stores)
        return stores;
    }

    render() {
        if (this.state.loading) {
            return <div>Cargando...</div>
        }
        return (
            <div>

                <a-scene vr-mode-ui="enabled: false"
                    embedded
                    arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;">
                    {this.state.stores.map(marker => {
                        return (
                            <a-text value={marker.name} geometry="primitive:plane"
                                gps-projected-entity-place={"latitude:" + marker.latitude + "longitude:" + marker.longitude}
                                position="0 15 0" scale="0.3 0.3 0.3" />

                        )
                    })}
                    {this.state.stores.map(marker => {
                        return (
                            <a-sphere gps-projected-entity-place={"latitude:" + marker.latitude + "longitude:" + marker.longitude} color="yellow" radius="5"></a-sphere>

                        )
                    })}

                    <a-camera gps-camera rotation-reader></a-camera>
                </a-scene>

            </div>
        )
    }

}
export default ArLocation5;
import TextGrid from '../COMPONENTS/textGrid';
import { aboutUs, contactUs } from '../DATA/contactUs';

import React, { Component } from 'react';
import Map from '../API/GoogleMaps.API.jsx'

/*
Google Map ;
opens a google map 
open location can be change from options --> center
red dot can be change from marker--> position

*/


class GoogleMap extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <Map
                id="myMap"
                options={{
                    center: { lat: 41.0082, lng: 28.9784 },
                    zoom: 8
                }}
                onMapLoad={map => {
                    const marker = new window.google.maps.Marker({
                        position: { lat: 41.0082, lng: 28.9784 },
                        map: map,
                        title: 'Hello Istanbul!'
                    });
                }}
            />
        );
    }
}


export default function ContactUs() {

    return (
        <div class='MainPage'>
            <div class='textGrid' >
                <TextGrid
                    text1={contactUs.text}
                    text2={contactUs.number}
                    text3={contactUs.mail}
                    text4={contactUs.adress}
                />
            </div>
            <div class='textGrid' >
                <TextGrid
                    text1={aboutUs.text}
                    text2={aboutUs.text2}
                />
            </div>
            <div class='map'>
                <GoogleMap />
            </div>
        </div>
    );

}
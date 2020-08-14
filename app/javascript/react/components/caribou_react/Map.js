import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'

function Map() {
    return ( 
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat: 45, lng: -75, }}
        />
       
    );
}

const WrappedMap =  withScriptjs(withGoogleMap(Map));


export default function App() {
    return <div style={{width: '75 vw', height: '75vw'}}>
         <WrappedMap 
            googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDwbrIrsRveXrQGNHKPG4tfVhhW1V2r2Ko'}
            loadingElement={<div style={{ height: "75%"}} />}
            containerElement={<div style={{ height: "75%"}} />}
            mapElement={<div style={{ height: "75%"}} />}
            
            
            />
    </div>
};

/* global google */

import React,{PureComponent} from 'react';
import {withGoogleMap,GoogleMap,Marker,Polyline,DirectionsRenderer} from "react-google-maps";
import Controls from '../controls/controls';
import MapWithAMarker from './mapted'
import RideDetails from '../ridedetails.js/RideDetails';
class Map extends PureComponent{
    state={
        defaultPoint:[
            { lat:12.9715987, lng:77.59456269999998}

        ],
        startingPoint:[
            { lat:12.9715987, lng:77.59456269999998}
        ],
        endingPoint:[
            { lat:12.9715987, lng:77.59456269999998}
        ],
        directions:null,
        pathFinder:[],
        loadMap:false,
        roadDetails:[]
       
        
    }
    setTheLocation=(location)=>{
        console.log("HEre");
        console.log(location)
        this.setState({
            default:[
                { lat:location.startingPoint[0].lat, lng:location.startingPoint[0].lang}
    
            ],
            startingPoint:[
                { lat:location.startingPoint[0].lat, lng:location.startingPoint[0].lang}
            ],
            endingPoint:[
                { lat:location.endingPoint[0].lat, lng:location.endingPoint[0].lang}
            ],
            
        })
        if(this.state.startingPoint && this.state.endingPoint){
            const roadDetails=[...this.state.roadDetails];
            roadDetails.push({"source":this.state.startingPoint,"destination":this.state.endingPoint})
            this.setState({
                loadMap:true,
                roadDetails

            })
        }
        console.log(this.state.listDetails);
       
    }
    render(){
        let path=[];
        console.log(this.state.startingPoint[0].lat);
        const DirectionsService = new google.maps.DirectionsService();
        DirectionsService.route({
            origin: new google.maps.LatLng(this.state.startingPoint[0].lat, this.state.startingPoint[0].lng),
            destination: new google.maps.LatLng(this.state.endingPoint[0].lat, this.state.endingPoint[0].lng),
            travelMode: google.maps.TravelMode.DRIVING,
          }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              this.setState({
                directions: result,
              });
              for (let i = 0, len = result.routes[0].overview_path.length; i < len; i++){
                path.push(result.routes[0].overview_path[i]);
                 }
                 this.setState({
                     pathFinder:path
                 })
            } else {
              console.error(`error fetching directions ${result}`);
            }
          });
        return(
            <div>
                <Controls setTheLocation={this.setTheLocation} />
                {this.state.loadMap?(<MapWithAMarker
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                setTheLocation={this.state}
                directions={this.state.directions}
                pathFinder={this.state.pathFinder}
                />):(<div><h1>Choose the origin and destination</h1></div>)}
                {this.state.roadDetails.length?(<RideDetails roadDetails={this.state.roadDetails}/>):(<div><p>No details</p></div>)}
                
            </div>
        )
    }
}
export default Map;
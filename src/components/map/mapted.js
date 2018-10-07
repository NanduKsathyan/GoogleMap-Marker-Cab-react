import React,{Component} from 'react';
import {withGoogleMap,GoogleMap,Marker,Polyline,DirectionsRenderer} from "react-google-maps";

class  MapWithAMarker extends Component{
    state={
        animateIco:'0'

    }
    count = 0;
    startRide=()=>{
        this.animateCircle();
        this.count=0;
        this.setState({
            animateIco:0
        })
    }
     animateCircle=()=> {
       
        let timerId=setInterval(()=>{
            this.count = (this.count + 1) % 200;
          this.setState({
            animateIco:(this.count / 2)
        })
        console.log("State Value");
        console.log(this.state);
        if(this.state.animateIco ===99){
            clearInterval(timerId);
        }
        },20)
    }
    render(){
    const car = "M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z";

    const lineSymbol = {
        path: car,
        scale: .7,
        strokeColor: 'white',
        strokeWeight: .10,
        fillOpacity: 1,
        fillColor: '#404040'
      };
      
    return(
    <div>
        
        <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: this.props.setTheLocation.defaultPoint[0].lat, lng: this.props.setTheLocation.defaultPoint[0].lng }}
    >
    {/* {this.props.directions && <DirectionsRenderer directions={this.props.directions} />} */}
    <Polyline 
               path={this.props.pathFinder}
                geodesic={true}
                options={{
                    strokeColor: "#ff2527",
                    strokeOpacity: 0.75,
                    strokeWeight: 2,
                    icons: [
                        {
                            icon: lineSymbol,
                            offset: this.state.animateIco+"%"

                        }
                    ]
                }}
            />
    <Marker
        position={{ lat: this.props.setTheLocation.startingPoint[0].lat, lng: this.props.setTheLocation.startingPoint[0].lng}}
      />
      <Marker
        position={{ lat: this.props.setTheLocation.endingPoint[0].lat, lng: this.props.setTheLocation.endingPoint[0].lng }}
      />
      {this.props.directions && <DirectionsRenderer directions={this.props.directions} />}
    </GoogleMap>
    <div className="center margintop-10 margin-bottom-20">
            <button class="button" onClick={this.startRide}>Start Ride</button>
        </div>
    </div>
    
    )
  }
  
}
export default  withGoogleMap(MapWithAMarker)
import React, { PureComponent} from 'react'
import Geosuggest from 'react-geosuggest';
import './controls.css'

class controls extends PureComponent {
  state={
    startingPoint:[],
    endingPoint:[],
    origin:null,
    destination:null
  }

  onSuggestSelect=({location})=>{
    console.log("This is the sorce")
    console.log(location);
    this.setState({
      startingPoint:[
        {lat:location.lat,lang:location.lng}
      ]
    })
  }
  onSuggestSelectDes=({location})=>{
    console.log("This is the destination");
    console.log(location);
    this.setState({
      endingPoint:[
        {lat:location.lat,lang:location.lng}
      ]
    })
  }
  handleInput=(e)=>{
    e.preventDefault();
    console.log(this.state);
    
    //this.props.setTheLocation(this.state);
  }
  handleChange=(e)=>{
    //const journeyData=[...this.state.journeyData];
    // journeyData.push({origin:e.target.source.value,destination:e.target.destination.value});
    // console.log("journeyData");
    // console.log(journeyData);
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render() {
    return (
        <div>
          <form onSubmit={this.handleInput}> 
            <Geosuggest onSuggestSelect={this.onSuggestSelect} name="starting" id="origin" onChange={this.handleChange} placeholder="Enter your Starting point"/>
            <Geosuggest onSuggestSelect={this.onSuggestSelectDes} name="ending" id="destination" placeholder="Enter your Ending point"/>
            <div className="center">
              <button className="button" onClick={this.handleInput}><span>Load Map </span></button>
              </div>
          </form>
          
      </div>
    )
  }
}
export default controls;
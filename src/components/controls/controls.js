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

  onSuggestSelect=(info)=>{
    console.log("This is the sorce")
    console.log(info);
    this.setState({
      startingPoint:[
        {lat:info.location.lat,lang:info.location.lng}
      ],
      origin:info.label
    })
  }
  onSuggestSelectDes=(info)=>{
    console.log("This is the destination");
    console.log(info);
    this.setState({
      endingPoint:[
        {lat: info.location.lat,lang: info.location.lng}
      ],
      destination:info.label
    })
  }
  handleInput=(e)=>{
    e.preventDefault();
    console.log(this.state);
    
    this.props.setTheLocation(this.state);
  }
  render() {
    return (
        <div>
          <form onSubmit={this.handleInput}> 
            <Geosuggest onSuggestSelect={this.onSuggestSelect}  name="starting" id="origin"  placeholder="Enter your Starting point"/>
            <Geosuggest onSuggestSelect={this.onSuggestSelectDes} name="ending" id="destination" placeholder="Enter your Ending point"/>
            <div className="wrapper">
              <button className="button button-center" onClick={this.handleInput}><span>Load Map </span></button>
              </div>
          </form>
          
      </div>
    )
  }
}
export default controls;
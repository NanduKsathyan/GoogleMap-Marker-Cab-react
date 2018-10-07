import React, { Component } from 'react';
import './App.css';
import Mapy from './components/map/map';
class App extends Component {
  render() {
    return (
      <div>
        
        <Mapy/>
      </div>
      
    );
  }
}

// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyDIRBUwBkojgShl_I4uFR2VWm1Ir9FVYig")
// })(App)
export default App;
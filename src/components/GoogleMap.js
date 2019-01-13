import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat:12.970666 ,
      lng:77.645305
    },
    zoom: 11
  };
 
  render() {
    console.log(this.props)
   
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDZTam8-WWORM54rCUXW0viWXKZROPiJho'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.lat?this.props.lat:"12.970666"}
            lng={this.props.lng?this.props.lng:"77.645305"}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMap;
import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker,Polygon,Polyline } from "react-google-maps";
import { CurrentLocation,BasicDemo,MarkerMap,Polygons,Polylines } from "../../constant";

const GoogleMaps = (props) => {

    const[location,setlocation] = useState({ address: false,
        mapPosition: {
           lat: 18.5204, lng: 73.8567
          },
          markerPosition: {
           lat: 18.5204, lng: 73.8567
          }
       })

    const polygontriangleCoords = [
        {lat: 25.774, lng: -80.190},
        {lat: 18.466, lng: -66.118},
        {lat: 32.321, lng: -64.757},
        {lat: 25.774, lng: -80.190}
      ];

    const polylinetriangleCoords = [
        {lat: 37.772, lng: -122.214},
        {lat: 21.291, lng: -157.821},
        {lat: -18.142, lng: 178.431},
        {lat: -27.467, lng: 153.027}
      ];
  
    
    const showinfowindow = () => {
        setlocation({...location,address:true})
    }

    const BasicMap = withScriptjs(
        withGoogleMap(
        props => (
          <GoogleMap google={props.google}
           defaultZoom={15}
           defaultCenter={{ lat: location.mapPosition.lat, lng: location.mapPosition.lng }}
          >
        </GoogleMap>
        )
        )
       );

    const MarkupMap = withScriptjs(
        withGoogleMap(
         props => (
          <GoogleMap google={props.google}
           defaultZoom={15}
           defaultCenter={{ lat: location.mapPosition.lat, lng: location.mapPosition.lng }}
          >
           <Marker google={props.google}
            name={'Dolores park'}
               draggable={true}
               onClick={ showinfowindow }
               position={{ lat:location.markerPosition.lat, lng: location.markerPosition.lng }}
           />
           <Marker />
           {location.address  ? 
           <InfoWindow
            position={{ lat: ( location.markerPosition.lat + 0.0018 ), lng:location.markerPosition.lng }}
           >
            <div>
             <span style={{ padding: 0, margin: 0 }}>{CurrentLocation}</span>
            </div>
           </InfoWindow>
           :""}
        </GoogleMap>
        )
        )
       );

    const PolygonMap = withScriptjs(
        withGoogleMap(
        props => (
        <GoogleMap google={props.google}
            defaultZoom={5}
            defaultCenter={{ lat: 24.886, lng:  -70.268 }}
        >
        <Polygon
            paths={polygontriangleCoords}
            strokeColor="#FF0000"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#FF0000"
            fillOpacity={0.35}
            
            />
        </GoogleMap>
        )
        )
       );

       const PolylineMap = withScriptjs(
        withGoogleMap(
        props => (
        <GoogleMap google={props.google}
        defaultZoom={3}
        defaultCenter={{ lat: 0, lng: -180 }}
        >
        <Polyline
            paths={polylinetriangleCoords}
            geodesic= {true}
            strokeColor= '#FF0000'
            strokeOpacity= {1.0}
            strokeWeight= {2}
            />
        </GoogleMap>
        )
        )
       );

    return (
        <Fragment>
            <Breadcrumb parent="Maps" title="Google Maps"/>
            <Container fluid={true}>
                <Row>
                    <Col xl="6" md="12">
                        <Card>
                            <CardHeader>
                                <h5>{BasicDemo}</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="map-js-height">
                                    <div id="gmap-simple" className="map-block">
                                    <BasicMap
                                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCdXpLSJ3Ibdu-Phs9QOvpqb9d1DtPf7wQ&libraries=places"
                                        loadingElement={
                                        <div style={{ height: `100%` }} />
                                        }
                                        containerElement={
                                        <div style={{ height: '300px' }} />
                                        }
                                        mapElement={
                                        <div style={{ height: `100%` }} />
                                        }
                                        />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl="6" md="12">
                        <Card>
                            <CardHeader>
                                <h5>{MarkerMap}</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="map-js-height">
                                    <div id="gmap-simple" className="map-block">
                                    <MarkupMap
                                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCdXpLSJ3Ibdu-Phs9QOvpqb9d1DtPf7wQ&libraries=places"
                                        loadingElement={
                                        <div style={{ height: `100%` }} />
                                        }
                                        containerElement={
                                        <div style={{ height: '300px' }} />
                                        }
                                        mapElement={
                                        <div style={{ height: `100%` }} />
                                        }
                                        />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl="6" md="12">
                        <Card>
                            <CardHeader>
                                <h5>{Polygons}</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="map-js-height">
                                    <div id="gmap-simple" className="map-block">
                                    <PolygonMap
                                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCdXpLSJ3Ibdu-Phs9QOvpqb9d1DtPf7wQ&libraries=places"
                                        loadingElement={
                                        <div style={{ height: `100%` }} />
                                        }
                                        containerElement={
                                        <div style={{ height: '300px' }} />
                                        }
                                        mapElement={
                                        <div style={{ height: `100%` }} />
                                        }
                                        />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl="6" md="12">
                        <Card>
                            <CardHeader>
                                <h5>{Polylines}</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="map-js-height">
                                    <div id="gmap-simple" className="map-block">
                                    <PolylineMap
                                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCdXpLSJ3Ibdu-Phs9QOvpqb9d1DtPf7wQ&libraries=places"
                                        loadingElement={
                                        <div style={{ height: `100%` }} />
                                        }
                                        containerElement={
                                        <div style={{ height: '300px' }} />
                                        }
                                        mapElement={
                                        <div style={{ height: `100%` }} />
                                        }
                                        />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default GoogleMaps
import React, { PureComponent } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Collapsible from 'react-collapsible';

export default class map extends PureComponent {
    render() {
        const position = [this.props.ship.latitude, this.props.ship.longitude];
        return (
            <div className="slds-grid slds-wrap slds-grid_pull-padded cmpcontainer">
                <Collapsible classParentString="w-full"
                    trigger={<div className="slds-size_1-of-1 bg-header h-centered slds-text-heading_medium clickable">Map</div>}
                >
                <div className="mapContainer">
                    <Map center={position} zoom={6} className="map">
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={position}>
                            <Popup>
                                <span>
                                    A pretty CSS3 popup.<br />Easily customizable.
                            </span>
                            </Popup>
                        </Marker>
                    </Map>
                </div>
                </Collapsible>
            </div>
        )
    }
}
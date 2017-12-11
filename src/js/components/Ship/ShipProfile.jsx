import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../Layout';
import FleetTable from '../Index/FleetTable';
import Alarms from './Alarms';
import Card from './Card';
import Crew from './Crew';
import Map from './Map';
import Schedule from './Schedule';
import Options from './Options';
import Charts from './Charts';
import { Col, Row, DateInput } from 'react-lightning-design-system';
import ships from '../../../data/ships';


function anonymous() {

}

//<Crew crew={ship.crew} />
export default class shipProfile extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const ship = ships.filter((ship) => ship.mmsi == this.props.match.params.mmsi)[0];
        if (!ship) {
            return <FleetTable />;
        }
        
        //this.props.params.ship = ship;
        return (
            <div>
                <Layout />
                <div className="options"><Options /></div>

                <Row cols={3}>
                    <Col cols={2}>
                        <Schedule />
                        <Map ship={ship} />

                        <Charts />
                    </Col>
                    <Col cols={1}>
                        <Card ship={ship} />
                        <Alarms ships={ships} />
                    </Col>
                </Row>



            </div >
        );
    }
}
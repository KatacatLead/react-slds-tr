import React, { PureComponent } from 'react';
import ships from '../../../data/ships';
import { Link } from 'react-router-dom';
import Layout from '../Layout';

const row = ships.map((ship) =>
    <tr key={ship.mmsi}>
        <td data-label="Account Name">
            <div className="slds-truncate" title="Name"><Link to={`/ship/${ship.mmsi}`}>{ship.name}</Link></div>
        </td>
        <td data-label="Account Name">
            <div className="slds-truncate" title="Destination">{ship.destination}</div>
        </td>
        <td data-label="Account Name">
            <div className="slds-truncate" title="Literas">{ship.literas}</div>
        </td>
        <td data-label="Account Name">
            <div className="slds-truncate" title="Butacas">{ship.butacas}</div>
        </td>
        <td data-label="Account Name">
            <div className="slds-truncate" title="Navigation Status">{ship.navStat}</div>
        </td>
    </tr>);
export default class IndexPage extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Layout>
                </Layout>
                <table className="slds-table slds-table_bordered slds-table_cell-buffer">
                    <thead>
                        <tr className="slds-text-title_caps">
                            <th scope="col">
                                <div className="slds-truncate" title="Name">Name</div>
                            </th>
                            <th scope="col">
                                <div className="slds-truncate" title="Destination">Destination</div>
                            </th>
                            <th scope="col">
                                <div className="slds-truncate" title="Literas">Literas</div>
                            </th>
                            <th scope="col">
                                <div className="slds-truncate" title="Butacas">Butacas</div>
                            </th>
                            <th scope="col">
                                <div className="slds-truncate" title="Navigation Status">Navigation Status</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {row}
                    </tbody>
                </table>

            </div>
        );
    }
}

import React, { PureComponent } from 'react';
import schedule from '../../../data/schedule';
import { Row, Col, Icon } from 'react-lightning-design-system';
import Collapsible from 'react-collapsible';

// Table Head
/*<thead>
    <tr className="slds-text-title_caps">
        <th scope="col">
            <div className="slds-truncate" title="Name"></div>
        </th>
        <th scope="col">
            <div className="slds-truncate" title="Name">Port</div>
        </th>
        <th scope="col" className="slds-border_right">
            <div className="slds-truncate" title="Destination">Time</div>
        </th>
        <th scope="col" className="bg-to">
            <div className="slds-truncate" title="Literas">Port</div>
        </th>
        <th scope="col" className="bg-to">
            <div className="slds-truncate" title="Butacas">Time</div>
        </th>
    </tr>
</thead>*/


function toDate(datetime) {
    return datetime;
}

function testing() {
    console.log('testing');
}

const scheduleRow = schedule.map((row) =>
    <tr key={row.id} >
        <td>
            <div className="slds-truncate" title="From Port">
                <a onClick={() => testing()}>
                    <figure>
                        <Icon icon="user" category="standard" size="small" />
                    </figure>
                </a>
            </div>
        </td>
        <td data-label="From Port">
            <div className="slds-truncate" title="From Port">
                <p>{row.from.port}</p>
                <p className="schedulePadded">  Scheduled</p>
                <p className="schedulePadded">  Real</p>
            </div>

        </td>
        <td data-label="Schedule" className="slds-border_right">
            <div className="slds-truncate" title="Schedule">
                <p className="normalHeight"></p>
                <p>{toDate(row.to.schedule)}</p>
                <p>{toDate(row.to.schedule)}</p>
            </div>
        </td>
        <td data-label="To Port">
            <div className="slds-truncate" title="To Port">
                <p>{row.to.port}</p>
                <p className="schedulePadded">  Scheduled</p>
                <p className="schedulePadded">  Real</p>
            </div>
        </td>
        <td data-label="Schedule">
            <div className="slds-truncate" title="Schedule">
                <p className="normalHeight"></p>
                <p>{toDate(row.to.schedule)}</p>
                <p>{toDate(row.to.schedule)}</p>
            </div>
        </td>
    </tr>

);
export default class scheduleTable extends PureComponent {
    render() {
        return (
            <div className="slds-grid slds-wrap slds-grid_pull-padded cmpcontainer">
                <Collapsible classParentString="w-full"
                    trigger={<div className="slds-size_1-of-1 bg-header h-centered slds-text-heading_medium clickable w-full">Schedule</div>}
                >
                    <Row>
                        <div className="bg-header2 h-centered">FROM</div>
                        <div className="bg-header2 h-centered">TO</div>
                    </Row>
                        <table className="slds-table slds-table_bordered slds-table_cell-buffer">

                            <tbody>
                                {scheduleRow}
                            </tbody>
                        </table>

                </Collapsible>
            </div>
        );
    }
}
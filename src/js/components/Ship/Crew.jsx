import React, { PureComponent } from 'react';
import { Icon, Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'react-lightning-design-system';
export default class scheduleTable extends PureComponent {
    render() {
        const row = this.props.crew.map((row) =>
            <TableRow>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
                <TableRowColumn>{row.position}</TableRowColumn>
                <TableRowColumn>{row.mobilePhone}</TableRowColumn>
                <TableRowColumn>{row.email}</TableRowColumn>
            </TableRow>
        );
        return (
            <div className="slds-grid slds-wrap slds-grid_pull-padded cmpcontainer">
                <div className="slds-size_1-of-1 bg-header h-centered slds-text-heading_medium">Crew</div>
                <div className="slds-size_1-of-1">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>Status</TableHeaderColumn>
                                <TableHeaderColumn>Position</TableHeaderColumn>
                                <TableHeaderColumn>Mobile Phone</TableHeaderColumn>
                                <TableHeaderColumn>Email</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {row}
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    }
}
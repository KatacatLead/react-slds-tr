import React, { PureComponent } from 'react';
import { Toast, Row } from 'react-lightning-design-system';
import Collapsible from 'react-collapsible';

function anonymous() {

}

export default class alarms extends PureComponent {
    render() {
        const r = this.props.ships.map((ship) => {
            const r2 = ship.alarms.map((alarm) => {
                return (
                        <Toast className="alarm"
                            icon={alarm.icon}
                            level={alarm.level}
                            onClose={anonymous()}
                            alertTexture={false}>
                            <p>{alarm.notification}</p>
                            <p>Y ahora te explico un poco de que va la vaina</p>
                        </Toast>
                )
            });
            return r2;
        });

        return (
            <div className="cmpcontainer">
                <Collapsible
                    trigger={<div className="bg-header h-centered slds-text-heading_medium clickable">Alarms</div>}
                    classParentString="w-full"
                >
                <Row cols={1} className="alarmsContainer">
                    {r}
                </Row>
                </Collapsible>
            </div>
        );
    }
}



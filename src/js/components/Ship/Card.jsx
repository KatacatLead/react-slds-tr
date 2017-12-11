import React, { PureComponent } from 'react';
import schedule from '../../../data/schedule';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { MediaObject, Form, FieldSet, Col, Row, Input, Textarea, Checkbox, CheckboxGroup, Button } from 'react-lightning-design-system';
import Collapsible from 'react-collapsible';

function anonymous() {

}

const avatar = '../../../static/img/avatar1.jpg';

export default class Card extends PureComponent {
    openModal() {
        document.getElementById('Modal').style.display = 'inline';
    }


    render() {
        const r = Object.keys(this.props.ship.journeys).map(function (key, value) {
            return (
                <Col key={key}>
                    <Input className="i-short" type="text" placeholder="Valor" value={value} label={key} />
                </Col>
            )
        });
        return (
            <div className="slds-grid slds-grid_pull-padded cmpcontainer card">
                <div className="modal" id="Modal">
                    <Modal ship={this.props.ship}/>
                </div>
                <Form type="compound" onSubmit={anonymous()} className="w-full">
                    <MediaObject figureLeft={<img src={avatar} width="40px" />}>
                        <Row className="cardHeader">
                            <Col className="ch1">
                                <h3>
                                    {this.props.ship.name}
                                </h3>
                            </Col>
                            <Col className="ch2">
                                <Button type="neutral" onClick={() => this.openModal()}>Edit</Button>
                            </Col>
                        </Row>
                    </MediaObject>
                    <FieldSet label="Dimensiones">
                        <Row cols={3}>
                            <Col cols={1}>
                                Eslora: value
                            </Col>
                            <Col cols={1}>
                                Manga: value
                            </Col>
                            <Col cols={1}>
                                Calado: value
                            </Col>
                        </Row>
                    </FieldSet>
                    <FieldSet label="Capacidad">
                        <Row cols={3}>
                            <Col cols={1}>
                                Literas: value
                            </Col>
                            <Col cols={1}>
                                Butacas: value
                            </Col>
                            <Col cols={1}>
                                Metros lineales: value
                            </Col>
                        </Row>
                        <Row>
                            Alta Velocidad
                        </Row>
                    </FieldSet>
                    <FieldSet label="Servicios">
                        <Row>
                            <CheckboxGroup>
                                <Checkbox label="WiFi" value={1} checked disabled/>
                                <Checkbox label="Piscina" value={2} disabled/>
                                <Checkbox label="Helipuerto" value={3} disabled/>
                            </CheckboxGroup>
                            <CheckboxGroup>
                                <Checkbox label="Solarium" value={1} disabled/>
                                <Checkbox label="Jacuzzi" value={2} disabled/>
                                <Checkbox label="Zona VIP" value={3} disabled/>
                            </CheckboxGroup>
                        </Row>
                    </FieldSet>
                    <FieldSet label="Velocidad Máxima">
                        <Row>
                            {r}
                        </Row>
                    </FieldSet>
                </Form>
            </div>
        );
    }
}
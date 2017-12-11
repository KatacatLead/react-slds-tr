import React, { PureComponent } from 'react';
import { CheckboxGroup, Checkbox, Col, Select, Option, Modal, ModalHeader, ModalContent, ModalFooter, Form, Row, FieldSet, Input, DateInput, Picklist, PicklistItem, Lookup, Button } from 'react-lightning-design-system';

function anonymous() {

}

export default class modal extends PureComponent {
    cancelForm() {
        document.getElementById('Modal').style.display = 'none';
    }

    saveForm() {
        document.getElementById('Modal').style.display = 'none';
    }

    render() {
        const r = Object.keys(this.props.ship.journeys).map(function (key, value) {
            return (
                <Col>
                    <Input className="i-short" type="text" placeholder="Valor" value={value} label={key} />
                </Col>
            )
        });
        return (
            <Modal opened onHide={anonymous()}>
                <ModalHeader title="Modal Form" closeButton />
                <ModalContent className="slds-p-around--small">
                    <Form type="compound">
                        <FieldSet label="Name">
                            <Row>
                                <Input label="Eslora" type="number" step=".10" placeholder="Eslora" className="i-short" />
                                <Input label="Manga" type="number" step=".10" placeholder="Manga" className="i-short" />
                                <Input label="Calado" type="number" step=".10" placeholder="Calado" className="i-short" />
                            </Row>
                        </FieldSet>
                        <FieldSet label="Date Range">
                            <Row>
                                <Input label="Literas" type="number" step="1" placeholder="Literas" className="i-short" />
                                <Input label="Butacas" type="number" step="1" placeholder="Butacas" className="i-short" />
                                <Input label="Metros lineales" type="number" step=".10" placeholder="Manga" className="i-short" />
                            </Row>
                        </FieldSet>
                        <Row>
                            <Select label="Tipo" defaultValue={1}>
                                <Option value="A">Alta Velocidad</Option>
                                <Option value="B">Buque de carga</Option>
                                <Option value="F">Ferry</Option>
                                <Option value="S">Superferry</Option>
                            </Select>
                        </Row>
                        <FieldSet label="Servicios">
                            <Row>
                                <CheckboxGroup>
                                    <Checkbox label="WiFi" value={1} />
                                    <Checkbox label="Piscina" value={2} />
                                    <Checkbox label="Helipuerto" value={3} />
                                </CheckboxGroup>
                                <CheckboxGroup>
                                    <Checkbox label="Solarium" value={1} />
                                    <Checkbox label="Jacuzzi" value={2} />
                                    <Checkbox label="Zona VIP" value={3} />
                                </CheckboxGroup>
                            </Row>
                        </FieldSet>
                        <FieldSet label="Velocidad Máxima">
                            <Row>
                                {r}
                            </Row>
                        </FieldSet>
                    </Form>
                </ModalContent>
                <ModalFooter>
                    <Button type="neutral" label="Cancel" onClick={() => this.cancelForm()} />
                    <Button type="brand" label="Done" onClick={() => this.saveForm()} />
                </ModalFooter>
            </Modal>
        )
    };
}




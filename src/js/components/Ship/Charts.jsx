import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-lightning-design-system';
import { Doughnut, Line } from 'react-chartjs-2';
import Collapsible from 'react-collapsible';

export default class alarms extends PureComponent {
    moveLine(e) {
        if (e.clientX > 70 && e.clientX < 1179) {
            const tl1 = document.getElementById("tl1"),
                tl2 = document.getElementById("tl2"),
                tl3 = document.getElementById("tl3");
            tl1.style.left = e.clientX,
                tl2.style.left = e.clientX,
                tl3.style.left = e.clientX;
        }
    }

    showLine() {
        const tl1 = document.getElementById("tl1"),
            tl2 = document.getElementById("tl2"),
            tl3 = document.getElementById("tl3");
        tl1.style.display = 'inline',
            tl2.style.display = 'inline',
            tl3.style.display = 'inline';
    }

    hideLine() {
        const tl1 = document.getElementById("tl1"),
            tl2 = document.getElementById("tl2"),
            tl3 = document.getElementById("tl3");
        tl1.style.display = 'none',
            tl2.style.display = 'none',
            tl3.style.display = 'none';
    }

    render() {
        const data = {
            datasets: [{
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
                data: [10, 20, 30]
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Red',
                'Yellow',
                'Blue'
            ]
        };

        const data2 = {
            labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
            datasets: [{
                data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 1200],
                label: "Africa",
                borderColor: "#3e95cd",
                fill: false
            }, {
                data: [282, 350, 411, 502, 635, 809, 947, 1302, 1400, 1500],
                label: "Asia",
                borderColor: "#8e5ea2",
                fill: false
            }, {
                data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                label: "Europe",
                borderColor: "#3cba9f",
                fill: false
            }, {
                data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                label: "Latin America",
                borderColor: "#e8c3b9",
                fill: false
            }, {
                data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                label: "North America",
                borderColor: "#c45850",
                fill: false
            }
            ]
        }

        return (
            <div className="slds-grid slds-wrap slds-grid_pull-padded cmpcontainer">
                <Collapsible
                    trigger={<div className="slds-size_1-of-1 bg-header h-centered slds-text-heading_medium clickable">Charts</div>}
                    classParentString="w-full"
                >
                    <Row cols={1} className="w-almost" onMouseMove={this.moveLine} onMouseEnter={this.showLine} onMouseLeave={this.hideLine}>
                        <div className="timeLine" id="tl1" />
                        <Col cols={1}>

                            <Line
                                data={data2}
                                height={300}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive: true
                                }}
                            />
                        </Col>
                    </Row>
                    <Row cols={1} className="w-almost" onMouseMove={this.moveLine} onMouseEnter={this.showLine} onMouseLeave={this.hideLine}>
                        <div className="timeLine" id="tl2" />
                        <Col cols={1}>
                            <Line
                                data={data2}
                                height={300}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive: true
                                }}
                            />
                        </Col>
                    </Row>
                    <Row cols={1} className="w-almost" onMouseMove={this.moveLine} onMouseEnter={this.showLine} onMouseLeave={this.hideLine}>
                        <div className="timeLine" id="tl3" />
                        <Col cols={1}>
                            <Line
                                data={data2}
                                height={300}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive: true
                                }}
                            />
                        </Col>
                    </Row>
                    <Row cols={4}>
                        <Col cols={1}>
                            <Doughnut
                                data={data}

                                height={250}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive: true
                                }}
                            />
                        </Col>
                        <Col cols={1}>
                            <Doughnut
                                data={data}

                                height={250}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive: true
                                }}
                            />
                        </Col>
                        <Col cols={1}>
                            <Doughnut
                                data={data}

                                height={250}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive: true
                                }}
                            />
                        </Col>
                        <Col cols={1}>
                            <Doughnut
                                data={data}

                                height={250}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive: true
                                }}
                            />
                        </Col>
                    </Row>
                </Collapsible>
            </div>
        );
    }
}



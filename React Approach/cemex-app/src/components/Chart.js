import React, { useState, useEffect, Component } from 'react'
import {Bar} from 'react-chartjs-2'
import Chart from 'chart.js/auto';

class DynamicChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            chartData: {
                labels: this.props.data.labels,
                datasets: [{
                                    label: 'Stats',
                                    data: this.props.data.data,
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)',
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)',
                                    ],
                                    borderWidth: 1
                                }]
                        }
        }
    }
    render(){
            return(
                <Bar
                    id = {this.state.id}
                    data={this.state.chartData}
                    options={{
                        responsive:true,
                        title: { text: "THICCNESS SCALE", display: true },
                        scales:{
                            yAxes:[ {
                                ticks:{
                                    beginAtZero: true
                                }
                            }
                            ]
                        }
                    }}
                />
            )
    }
}
export default DynamicChart;
import React, { useState, useEffect, Component } from 'react'
import {Bar} from 'react-chartjs-2'
import Chart from 'chart.js/auto';

class DynamicChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            chartData: {
                labels: ['22/03', '23/03', '24/03', '25/03', '26/03', '27/03'],
                datasets: [{
                                    label: 'Example Chart',
                                    data: [1,2,3,4,5,6,7,8,9,10],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)'
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
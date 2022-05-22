import React from "react";
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
    return (
        <div className='chart'>
              {props.dataPoints.map((datapoint) => {
                    <ChartBar key={datapoint.label} value={datapoint.value} maxValue={null}/>
                })}

        </div>

    )}

export default Chart;
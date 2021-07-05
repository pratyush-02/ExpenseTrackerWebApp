import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props)
{
    const datavalue=props.DataPoints.map(datapoint=>datapoint.value);
    const totmax=Math.max(...datavalue);
    return(
        <div className="chart">
            {props.DataPoints.map((datapoint)=>
            (<ChartBar
            key={datapoint.label}
            value={datapoint.value}
            maxvalue={totmax}
            label={datapoint.label} 
            />))}

        </div>
    );
}
export default Chart;
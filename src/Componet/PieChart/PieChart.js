import React from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import "./piechart.css"

ChartJS.register(ArcElement, Tooltip, Legend)

const PieChart = ({ data, selectedOption }) => {
    const chartData = {
        labels: data?.map(item => Object.keys(item)[0]), // Extraction of labels from the keys.
        datasets: [
            {
                data: data?.map(item => Object.values(item)[0]), // Extraction of values.
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 50, 0.6)',

                ],
            },
        ],
    };
    return (
        <>
            <div className="pie-chart-div" style={{ padding: "0px" }}>
                <p style={{ fontWeight: "bold", fontSize: "26px", color: "#070707", cursor: "pointer" }} className='mb-5 mb-lg-2'>Pie Chart Stats - {selectedOption}</p>
                <Pie data={chartData} />
            </div>
        </>

    )
}

export default PieChart

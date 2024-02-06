import React from 'react'
import {
    Chart as ChartJS, CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from '@faker-js/faker'

// Chart.register(StreamingPlugin);

ChartJS.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

// Chart.register(LineElement)

const LineChart = () => {

    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Products",
                backgroundColor: "rgb(255, 200, 230, .25)",
                borderColor: "rgb(255, 200, 230)",
                fill: true,
                data: labels.map(() => faker.datatype.number({ min: 0, max: 45 })),
                lineTension: 0.4
            },
            {
                label: "Visitors",
                backgroundColor: "rgb(4, 209, 130, .25)",
                borderColor: "rgb(4, 209, 130)",
                fill: true,
                data: labels.map(() => faker.datatype.number({ min: 0, max: 45 })),
                lineTension: 0.4
            },
            {
                label: "Sales",
                backgroundColor: "rgb(44, 120, 220, .25)",
                borderColor: "rgb(44, 120, 220)",
                fill: true,
                data: labels.map(() => faker.datatype.number({ min: 0, max: 45 })),
                lineTension: 0.4
            },

        ],
    };

    return (
        <Line data={data} />

    )
}

export default LineChart
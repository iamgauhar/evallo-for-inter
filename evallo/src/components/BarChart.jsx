import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const BarChart = () => {
    const labels = ['900', '1200', '1400', '1600'];
    const data = {
        labels,
        datasets: [
            {
                label: 'US',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(255, 99, 132)',
            },
            {
                label: 'Europ',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(53, 162, 235)',
            },
            {
                label: 'Asia',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgb(74, 223, 94)',
            },
            {
                label: 'Africa',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgb(216, 93, 247)',
            },
        ],
    };
    return (
        <Bar height={78} width={100} data={data} />
    )
}

export default BarChart
import configDB from '../../../data/customizer/config'
const primary = localStorage.getItem('default_color') || configDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || configDB.data.color.secondary_color;

export const barChartData = {
    labels: ['Mon', 'Tue', 'Wen', 'Thus', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: 'y',
            lagend: 'y',
            data: [35, 59, 80, 81, 56, 55, 40],
            borderColor: primary,
            backgroundColor: "rgba(145, 46, 252, 0.4)",
            highlightFill: "rgba(145, 46, 252, 0.4)",
            highlightStroke: primary,
            borderWidth: 2
        },
        {
            label: 'z',
            lagend: 'z',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: secondary,
            backgroundColor: "rgba(247, 49, 100, 0.4)",
            highlightFill: "rgba(247, 49, 100, 0.4)",
            highlightStroke: secondary,
            borderWidth: 2
        }
    ],
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        }
    }
}
export const barChartOptions = {
    maintainAspectRatio: true,
    legend: {
        display: false,
    },
    plugins: {
        datalabels: {
            display: false,
        }
    }
}

export const lineChartData = {
    labels: ['Mon', 'Tue', 'Wen', 'Thus', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            data: [10, 59, 80, 81, 56, 55, 40],
            borderColor: primary,
            backgroundColor: "rgba(145, 46, 252, 0.4)",
            borderWidth: 2,
        },
        {
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: secondary,
            backgroundColor: "rgba(247, 49, 100, 0.4)",
            borderWidth: 2,
        }
    ],
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        }
    }
}
export const lineChartOptions = {
    maintainAspectRatio: true,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [{
            stacked: false,
        }],
        yAxes: [{
            stacked: false,
        }]
    },
    plugins: {
        datalabels: {
            display: false,
        }
    }
}

export const data = {
    labels: ["Ford", "Chevy", "Toyota", "Honda", "Mazda"],
    datasets: [
        {
            label: 'My Second dataset',
            backgroundColor: 'rgba(145, 46, 252, 0.4)',
            borderColor: primary,
            pointBackgroundColor: 'rgba(145, 46, 252, 0.4)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: primary,
            pointHoverBorderColor: 'rgba(145, 46, 252, 0.4)',
            data: [12, 3, 5, 18, 7]
        }
    ]
};

export const lineChart2Data = {
    labels: ["", "10", "20", "30", "40", "50", "60", "70", "80"],
    datasets: [{
        backgroundColor: 'rgba(247, 49, 100, 0.2)',
        borderColor: secondary,
        pointColor: secondary,
        data: [10, 20, 40, 30, 0, 20, 10, 30, 10],
        lineTension: 0,
    },
    {
        backgroundColor: 'rgba(81, 187, 37, 0.2)',
        borderColor: "#51bb25",
        pointColor: "#51bb25",
        data: [20, 40, 10, 20, 40, 30, 40, 10, 20],
        lineTension: 0,
    },
    {
        backgroundColor: 'rgba(145, 46, 252, 0.2)',
        borderColor: primary,
        pointColor: primary,
        data: [60, 10, 40, 30, 80, 30, 20, 90, 0],
        lineTension: 0,
    }
    ]
}
export const lineChart2option = {
    maintainAspectRatio: false,
    animation: {
        duration: 0
    },
    legend: {
        display: false,
    },
    scaleShowVerticalLines: false,
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        }
    }
}

export const doughnutData = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
    datasets: [{
        data: [350, 450, 100],
        backgroundColor: [primary, secondary, "#51bb25"]
    }]
}
export const doughnutOption = {
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        }
    }
}

export const polarData = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'],
    datasets: [
        {
            data: [300, 500, 100, 40, 120],
            backgroundColor: [primary, secondary, "#f8d62b", "#51bb25", "#a927f9"]
        },

    ],
}

export const polarOption = {
    legend: {
        display: false,
    },
}




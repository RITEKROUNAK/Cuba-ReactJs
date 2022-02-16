import React from 'react';
import { Chart } from "react-google-charts";
import configDB from '../../../data/customizer/config'
const primary = localStorage.getItem('default_color') || configDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || configDB.data.color.secondary_color;


export const GooglePieChart1 = () => {
    return (
        <Chart
            width={'100%'}
            height={'400px'}
            chartType="PieChart"
            loader={<div>{"Loading Chart"}</div>}
            data={[
                ['Task', 'Hours per Day'],
                ['Work', 6.7],
                ['Eat', 13.3],
                ['Commute', 20],
                ['Watch TV', 26.7],
                ['Sleep', 33.3],
            ]}
            options={{
                title: 'My Daily Activities',
                colors: ["#a927f9", primary, "#51bb25", "#f8d62b", secondary]
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    );
}

export const GooglePieChart2 = () => {
    return (
        <Chart
            width={'100%'}
            height={'400px'}
            chartType="PieChart"
            loader={<div>{"Loading Chart"}</div>}
            data={[
                ['Task', 'Hours per Day'],
                ['Work', 6.7],
                ['Eat', 13.3],
                ['Commute', 20],
                ['Watch TV', 26.7],
                ['Sleep', 33.3],
            ]}
            options={{
                title: 'My Daily Activities',
                colors: ["#a927f9", primary, "#51bb25", "#f8d62b", secondary],
                is3D: true,
            }}
            rootProps={{ 'data-testid': '2' }}
        />
    )
}

export const GoogleDonutChart = () => {
    return (
        <Chart
            width={'100%'}
            height={'400px'}
            chartType="PieChart"
            loader={<div>{"Loading Chart"}</div>}
            data={[
                ['Task', 'Hours per Day'],
                ['Work', 11],
                ['Eat', 2],
                ['Commute', 2],
                ['Watch TV', 2],
                ['Sleep', 7],
            ]}
            options={{
                title: 'My Daily Activities',
                colors: ["#a927f9", primary, "#51bb25", "#f8d62b", secondary, secondary],
                pieHole: 0.4,
            }}
        />

    )
}

export const GoogleRotatingPieChart1 = () => {
    return (
        <Chart
            width={'100%'}
            height={'400px'}
            chartType="PieChart"
            loader={<div>{"Loading Chart"}</div>}
            data={[
                ['Language', 'Speakers (in millions)'],
                ['German', 2.85],
                ['French', 1.66],
                ['Italian', 0.316],
                ['Romansh', 0.0791],
            ]}
            options={{
                legend: 'none',
                pieSliceText: 'label',
                title: 'Swiss Language Use (100 degree rotation)',
                colors: ["#a927f9", primary, "#51bb25", "#a927f9", secondary],
                pieStartAngle: 100,
            }}
            rootProps={{ 'data-testid': '4' }}
        />
    )
}
export const GoogleRotatingPieChart2 = () => {
    return (
        <Chart
            width={'100%'}
            height={'400px'}
            chartType="PieChart"
            loader={<div>{"Loading Chart"}</div>}
            data={[
                ['Language', 'Speakers (in millions)'],
                ['Assamese', 13],
                ['Bengali', 83],
                ['Bodo', 1.4],
                ['Dogri', 2.3],
                ['Gujarati', 46],
                ['Hindi', 300],
                ['Kannada', 38],
                ['Kashmiri', 5.5],
                ['Konkani', 5],
                ['Maithili', 20],
                ['Malayalam', 33],
                ['Manipuri', 1.5],
                ['Marathi', 72],
                ['Nepali', 2.9],
                ['Oriya', 33],
                ['Punjabi', 29],
                ['Sanskrit', 0.01],
                ['Santhali', 6.5],
                ['Sindhi', 2.5],
                ['Tamil', 61],
                ['Telugu', 74],
                ['Urdu', 52],
            ]}
            options={{
                title: 'Indian Language Use',
                legend: 'none',
                pieSliceText: 'label',
                colors: ["#a927f9", primary, "#fb740d", secondary, "#a927f9", primary, "#51bb25", "#a927f9", "#fb740d", "#a927f9", primary, "#51bb25", "#a927f9", "#51bb25", primary, "#51bb25", "#a927f9", "#fb740d", "#a927f9", primary, primary, "#ff9f40"],
                slices: {
                    4: { offset: 0.2 },
                    12: { offset: 0.3 },
                    14: { offset: 0.4 },
                    15: { offset: 0.5 },
                },
            }}
            rootProps={{ 'data-testid': '5' }}
        />
    )
}
export const GoogleSliceCharts = () => {
    return (
        <Chart
            width={'100%'}
            height={'400px'}
            chartType="PieChart"
            loader={<div>{"Loading Chart"}</div>}
            data={[
                ['Pizza', 'Popularity'],
                ['Pepperoni', 33],
                ['Hawaiian', 26],
                ['Mushroom', 22],
                ['Sausage', 10],
                ['Anchovies', 9],
            ]}
            options={{
                title: 'Popularity of Types of Pizza',
                colors: [primary, secondary, "#51bb25", "#a927f9", primary],
                sliceVisibilityThreshold: 0.2,
            }}
            rootProps={{ 'data-testid': '7' }}
        />
    )
}
export const GoogleAreaChart = () => {
    return (
        <Chart
            width={'100%'}
            height={'300px'}
            chartType="AreaChart"
            loader={<div>{"Loading Chart"}</div>}
            data={[
                ['Year', 'Sales', 'Expenses'],
                ['2013', 1000, 400],
                ['2014', 1170, 460],
                ['2015', 660, 1120],
                ['2016', 1030, 540],
            ]}
            options={{
                title: 'Company Performance',
                hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                vAxis: { minValue: 0 },
                colors: ["#a927f9", primary],
                chartArea: { width: '50%', height: '70%' },
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    )

}
export const GoogleStackingChart = () => {
    return (
        <Chart
            width={'100%'}
            height={'300px'}
            chartType="AreaChart"
            loader={<div>{"Loading Chart"}</div>}
            data={[
                ['Year', 'Sales', 'Expenses'],
                ['2013', 1000, 400],
                ['2014', 1170, 460],
                ['2015', 660, 1120],
                ['2016', 1030, 540],
            ]}
            options={{
                isStacked: true,
                height: 300,
                legend: { position: 'top', maxLines: 3 },
                vAxis: { minValue: 0 },
                colors: ["#a927f9", primary],
            }}
            rootProps={{ 'data-testid': '2' }}
        />
    )
}

export const GoogleGhantChart = () => {
    return (
        <Chart
            width={'100%'}
            height={'300px'}
            chartType="Gantt"
            loader={<div>{"Loading Chart"}</div>}
            data={[
                [
                    { type: 'string', label: 'Task ID' },
                    { type: 'string', label: 'Task Name' },
                    { type: 'date', label: 'Start Date' },
                    { type: 'date', label: 'End Date' },
                    { type: 'number', label: 'Duration' },
                    { type: 'number', label: 'Percent Complete' },
                    { type: 'string', label: 'Dependencies' },
                ],
                [
                    'Research',
                    'Find sources',
                    new Date(2015, 0, 1),
                    new Date(2015, 0, 5),
                    null,
                    100,
                    null,
                ],
                [
                    'Write',
                    'Write paper',
                    null,
                    new Date(2015, 0, 9),
                    3 * 24 * 60 * 60 * 1000,
                    25,
                    'Research,Outline',
                ],
                [
                    'Cite',
                    'Create bibliography',
                    null,
                    new Date(2015, 0, 7),
                    1 * 24 * 60 * 60 * 1000,
                    20,
                    'Research',
                ],
                [
                    'Complete',
                    'Hand in paper',
                    null,
                    new Date(2015, 0, 10),
                    1 * 24 * 60 * 60 * 1000,
                    0,
                    'Cite,Write',
                ],
                [
                    'Outline',
                    'Outline paper',
                    null,
                    new Date(2015, 0, 6),
                    1 * 24 * 60 * 60 * 1000,
                    100,
                    'Research',
                ],
            ]}
            options={{
                gantt: {
                    criticalPathEnabled: false,
                    arrow: {
                        angle: 100,
                        width: 5,
                        color: '#51bb25',
                        radius: 0
                    },

                    palette: [
                        {
                            "color": primary,
                            "dark": secondary,
                            "light": "#047afb"
                        }
                    ]

                },
                backgroundColor: 'transparent',
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    )
}

export const GoogleLineChart = () => {
    return (
        <Chart
            chartType="LineChart"
            loader={<div>{"Loading Chart"}</div>}
            data={[
                ['month', 'Guardians of the Galaxy', 'The Avengers', 'Transformers: Age of Extinction'],
                [1, 37.8, 80.8, 41.8],
                [2, 30.9, 10.5, 32.4],
                [3, 40.4, 57, 25.7],
                [4, 11.7, 18.8, 10.5],
                [5, 20, 17.6, 10.4],
                [6, 8.8, 13.6, 7.7],
                [7, 7.6, 12.3, 9.6],
                [8, 12.3, 29.2, 10.6],
                [9, 16.9, 42.9, 14.8],
                [10, 12.8, 30.9, 11.6],
                [11, 5.3, 7.9, 4.7],
                [12, 6.6, 8.4, 5.2],
            ]}
            options={{
                chart: {
                    title: 'Box Office Earnings in First Two Weeks of Opening',
                    subtitle: 'in millions of dollars (USD)'
                },
                colors: [primary, secondary, "#51bb25"],
                height: 350,
                width: '100%',
                backgroundColor: 'transparent',
                chartArea: {
                    left: 0,
                    top: 0,
                    bottom: 0
                }
            }}
            rootProps={{ 'data-testid': '2' }}
        />
    )
}

export const GoogleBasicbarChart = () => {
    return (
        <Chart
            width={'100%'}
            height={'400px'}
            chartType="BarChart"
            loader={<div>{"Loading Chart"}</div>}
            data={[
                ['City', '2010 Population', '2000 Population'],
                ['New York City, NY', 8175000, 8008000],
                ['Los Angeles, CA', 3792000, 3694000],
                ['Chicago, IL', 2695000, 2896000],
                ['Houston, TX', 2099000, 1953000],
                ['Philadelphia, PA', 1526000, 1517000],
            ]}
            options={{
                title: 'Population of Largest U.S. Cities',
                chartArea: { width: '50%' },
                colors: [primary, secondary],
                backgroundColor: 'transparent',
                hAxis: {
                    title: 'Total Population',
                    minValue: 0,
                },
                vAxis: {
                    title: 'City',
                },
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    )
}

export const GoogleMaterialDesignChart = () => {
    return (
        <Chart
            width={'100%'}
            height={'400px'}
            chartType="Bar"
            loader={<div>{"Loading Chart"}</div>}
            data={[
                ['Year', 'Sales', 'Expenses', 'Profit'],
                ['2014', 1000, 400, 200],
                ['2015', 1170, 460, 250],
                ['2016', 660, 1120, 300],
                ['2017', 1030, 540, 350],
            ]}
            options={{
                colors: [primary, secondary, "#51bb25"],
                chart: {
                    title: 'Company Performance',
                    subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                },
            }}
            rootProps={{ 'data-testid': '2' }}
        />
    )
}

export const GoogleComboChart = () => {
    return (
        <Chart
            width={'100%'}
            height={'300px'}
            chartType="ComboChart"
            loader={<div>{"Loading Chart"}</div>}
            data={[
                [
                    'Month',
                    'Bolivia',
                    'Ecuador',
                    'Madagascar',
                    'Papua New Guinea',
                    'Rwanda',
                    'Average',
                ],
                ['2004/05', 165, 938, 522, 998, 450, 614.6],
                ['2005/06', 135, 1120, 599, 1268, 288, 682],
                ['2006/07', 157, 1167, 587, 807, 397, 623],
                ['2007/08', 139, 1110, 615, 968, 215, 609.4],
                ['2008/09', 136, 691, 629, 1026, 366, 569.6],
            ]}
            options={{
                title: 'Monthly Coffee Production by Country',
                vAxis: { title: 'Cups' },
                hAxis: { title: 'Month' },
                seriesType: 'bars',
                colors: [primary, "#51bb25", secondary, "#a927f9", "#f8d62b"],
                series: { 5: { type: 'line' } },
                backgroundColor: 'transparent',
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    )
}

export const GoogleBarChart2 = () => {
    return (
        <Chart
            width={'100%'}
            height={'400px'}
            chartType="BarChart"
            loader={<div>{"Loading Chart"}</div>}
            data={[
                [
                    'Element',
                    'Density',
                    { role: 'style' },
                    {
                        sourceColumn: 1,
                        role: 'annotation',
                        type: 'string',
                        calc: 'stringify',
                    },
                ],
                ["Copper", 10, "#a927f9", 10],
                ["Silver", 12, "#f8d62b", 12],
                ["Gold", 14, secondary, 14],
                ["Platinum", 16, primary, 16]
            ]}
            options={{
                title: 'Density of Precious Metals, in g/cm^3',
                height: 400,
                bar: { groupWidth: '95%' },
                backgroundColor: 'transparent',
                legend: { position: 'none' },
            }}
        />
    )
}

export const GoogleTreeChart = () => {
    return (
        <Chart
            width={'100%'}
            height={'400px'}
            chartType="WordTree"
            loader={<div>{"Loading Chart"}</div>}
            data={[
                ['Phrases'],
                ['cats are better than dogs'],
                ['cats eat kibble'],
                ['cats are better than hamsters'],
                ['cats are awesome'],
                ['cats are people too'],
                ['cats eat mice'],
                ['cats meowing'],
                ['cats in the cradle'],
                ['cats eat mice'],
                ['cats in the cradle lyrics'],
                ['cats eat kibble'],
                ['cats for adoption'],
                ['cats are family'],
                ['cats eat mice'],
                ['cats are better than kittens'],
                ['cats are evil'],
                ['cats are weird'],
                ['cats eat mice'],
            ]}
            options={{
                wordtree: {
                    format: 'implicit',
                    word: 'cats',
                    backgroundColor: 'transparent',
                },
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    )
}
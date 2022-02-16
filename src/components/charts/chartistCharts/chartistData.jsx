import 'chartjs-plugin-datalabels';

export const chart1 = {
	fullWidth: true
}

export const chart2 = {
    low: 0,
    showArea: true,
    showPoint: false,
    fullWidth: true
}


// Chart 3 Animating a Donut with Svg.animate
export const chart2Data = {
	series: [10, 20, 50, 20, 5, 50, 15],
	labels: [1, 2, 3, 4, 5, 6, 7]
}
export const chart2Option = {
	donut: true,
	showLabel: false,
}

// Chart 4 Bi-polar Line chart with area only
export const chart3Data = {
	labels: [1, 2, 3, 4, 5, 6, 7, 8],
	series: [
		[1, 2, 3, 1, -2, 0, 1, 0],
		[-2, -1, -2, -1, -2.5, -1, -2, -1],
		[0, 0, 0, 1, 2, 2.5, 2, 1],
		[2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
	]
}
export const chart3Options = {
	high: 3,
	low: -3,
	showArea: true,
	showLine: false,
	showPoint: false,
	fullWidth: true,
	axisX: {
		showLabel: false,
		showGrid: false
	}
}

// Chart 5 Line chart with area
export const chart4Data = {
	labels: [1, 2, 3, 4, 5, 6, 7, 8],
	series: [
		[5, 9, 7, 8, 5, 3, 5, 4]
	]
}

export const chart4Options = {
	low: 0,
	showArea: true,
}


//Bi-polar bar chart

export const chart5Data = {
	labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
	series: [
		[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
	]
}

export const chart5Options = {
	high: 10,
	low: -10,
	axisX: {
		labelInterpolationFnc: function (value, index) {
			return index % 2 === 0 ? value : null;
		}
	},
}

//Stacked bar chart

export const chart6Data = {
	labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q13', 'Q14'],
	series: [
		[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
		[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
		[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300]
	]
}

export const chart6Options = {
	stackBars: true,
	axisY: {
		labelInterpolationFnc: function (value) {
			return (value / 1000) + 'k';
		}
	},
}

// Horizontal bar chart
export const chart7Data = {
	labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
	series: [
		[5, 4, 3, 7, 5, 10, 3],
		[3, 2, 9, 5, 4, 6, 4]
	]
}

export const chart7Options = {
	seriesBarDistance: 10,
	reverseData: true,
	horizontalBars: true,
	axisY: {
		offset: 70
	},
}

// Chart 9 Extreme responsive configuration
export const chart9Data = {
	data: {
		labels: ['2010-11', '2011-12', '2012-13', '2013-13', '2014-15', '2015-16', '2016-17', '2017-18'],
		series: [
			[0.9, 0.4, 1.5, 4.9, 3, 3.8, 3.8, 1.9],
			[6.4, 5.7, 7, 4.95, 3, 3.8, 3.8, 1.9],
			[4.3, 2.3, 3.6, 4.5, 5, 2.8, 3.3, 4.3],
			[3.8, 4.1, 2.8, 1.8, 2.2, 1.9, 6.7, 2.9]
		]
	},
	options: {
		seriesBarDistance: 15,
		horizontalBars: false,
		axisY: {
			offset: 20
		},
	},
	responsiveOptions: [
		[
			"screen and (max-width: 1440px)",
			{
				seriesBarDistance: 11.5,
			}
		],
		[
			"screen and (max-width: 480px)",
			{
				stackBars: true,
				seriesBarDistance: 10
			}
		]
	]
}

// Chart 10 Simple line chart
export const chart10Data = {
	labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
	series: [
		[12, 9, 7, 8, 5],
		[2, 1, 3.5, 7, 3],
		[1, 3, 4, 5, 6]
	]
}
export const chart10Options = {
	fullWidth: true,
	chartPadding: {
		right: 40
	}
}

//Chart11: Holes in data
export const chart11Data = {
	labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
	series: [
		[5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
		[10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null],
		[null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null]
	]
}

export const chart11Options = {
	fullWidth: true,
	chartPadding: {
		right: 10
	},
	low: 0
}

// Chart 12 Filled holes in data
export var chart12Data = {
	labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
	series: [
		[5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
		[10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null],
		[null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null]
	]
}

export const chart12Options = {
	fullWidth: true,
	chartPadding: {
		right: 10
	},
	low: 0
}
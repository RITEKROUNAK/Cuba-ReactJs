export const smallchart1data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
    series: [
        [400, 900, 800, 1000, 700, 1200, 300],
        [1000, 500, 600, 400, 700, 200, 1100]
    ]
}
export const smallchart1option = {
    stackBars: true,
    axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
    },
    axisY: {
        low: 0,
        showGrid: false,
        showLabel: false,
        offset: 0,
        labelInterpolationFnc: function (value) {
            return (value / 1000) + 'k';
        }
    }

}
export const smallchart2data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
    series: [
        [400, 600, 900, 800, 1000, 1200, 500],
        [1000, 800, 500, 600, 400, 200, 900]
    ]
}
export const smallchart2option = {
    stackBars: true,
    axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
    },
    axisY: {
        low: 0,
        showGrid: false,
        showLabel: false,
        offset: 0,
        labelInterpolationFnc: function (value) {
            return (value / 1000) + 'k';
        }
    }

}
export const smallchart3data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
    series: [
        [1100, 900, 600, 1000, 700, 1200, 300],
        [300, 500, 800, 400, 700, 200, 1100]
    ]
}
export const smallchart3option = {
    stackBars: true,
    axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
    },
    axisY: {
        low: 0,
        showGrid: false,
        showLabel: false,
        offset: 0,
        labelInterpolationFnc: function (value) {
            return (value / 1000) + 'k';
        }
    }
}

export const smallchart4data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
    series: [
        [400, 600, 800, 1000, 700, 1100, 300],
        [1000, 500, 600, 300, 700, 200, 1100]
    ]
}
export const smallchart4option = {
    stackBars: true,
    axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
    },
    axisY: {
        low: 0,
        showGrid: false,
        showLabel: false,
        offset: 0,
        labelInterpolationFnc: function (value) {
            return (value / 1000) + 'k';
        }
    }
}
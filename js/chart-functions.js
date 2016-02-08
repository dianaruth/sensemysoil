google.load('visualization', '1', {packages: ['line']});
google.setOnLoadCallback(drawTemperatureChart);

function drawTemperatureChart(id) {

    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Time');
    data.addColumn('number', 'Probe 1');
    data.addColumn('number', 'Probe 2');
    data.addColumn('number', 'Probe 3');
    data.addColumn('number', 'Probe 4');

    data.addRows([
        [new Date('December 17, 1995 03:24:00'),  81.2, 80.8, 83.8, 84.3],
        [new Date('December 18, 1995 03:24:00'),  82.6, 79.8, 80.4, 80.9],
        [new Date('December 19, 1995 03:24:00'),  81.1, 82.6, 84.3, 83.1],
        [new Date('December 20, 1995 03:24:00'),  84.1, 83.2, 85.7, 82.1]
    ]);

    var options = {
        chart: {
            title: 'Temperature'
        },
        width: 900,
        height: 500
    };

    var chart = new google.charts.Line(document.getElementById(id));

    chart.draw(data, options);
}

function drawMoistureChart(id) {

    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Time');
    data.addColumn('number', 'Probe 1');
    data.addColumn('number', 'Probe 2');
    data.addColumn('number', 'Probe 3');
    data.addColumn('number', 'Probe 4');

    data.addRows([
        [new Date('December 17, 1995 03:24:00'), 0.4, 0.45, 0.3, 0.5],
        [new Date('December 18, 1995 03:24:00'), 0.35, 0.4, 0.54, 0.43],
        [new Date('December 19, 1995 03:24:00'), 0.6, 0.7, 0.68, 0.72],
        [new Date('December 20, 1995 03:24:00'), 0.43, 0.56, 0.6, 0.45]
    ]);

    var options = {
        chart: {
            title: 'Moisture'
        },
        width: 900,
        height: 500
    };

    var chart = new google.charts.Line(document.getElementById(id));

    chart.draw(data, options);
}

function drawSalinityChart(id) {

    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Time');
    data.addColumn('number', 'Probe 1');
    data.addColumn('number', 'Probe 2');
    data.addColumn('number', 'Probe 3');
    data.addColumn('number', 'Probe 4');

    data.addRows([
        [new Date('December 17, 1995 03:24:00'), 35, 36, 30, 38],
        [new Date('December 18, 1995 03:24:00'), 30, 41, 32, 35],
        [new Date('December 19, 1995 03:24:00'), 34, 39, 29, 32],
        [new Date('December 20, 1995 03:24:00'), 36, 34, 38, 31]
    ]);

    var options = {
        chart: {
            title: 'Salinity'
        },
        width: 900,
        height: 500
    };

    var chart = new google.charts.Line(document.getElementById(id));

    chart.draw(data, options);
}
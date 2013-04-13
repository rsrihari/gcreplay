google.load('visualization', '1', {packages: ['corechart', 'gauge']});

var gauge;
var gaugeData;
var gaugeOptions;
function drawGauge() {
    gaugeOptions = {
        min: 0,
        max: 1685,
        yellowFrom: 550,
        yellowTo: 800,
        greenFrom: 800,
        greenTo: 1685,
        minorTicks: 5
    };
    gaugeData = google.visualization.arrayToDataTable([
        ['RK', 'Azad', 'Nehru'],
        [815, 725, 465]
    ]);
    gauge = new google.visualization.Gauge(document.getElementById('soc-cult-gauge'));
    gauge.draw(gaugeData, gaugeOptions);

    gaugeOptions = {
        min: 0,
        max: 150,
        yellowFrom: 50,
        yellowTo: 75,
        greenFrom: 75,
        greenTo: 150,
        minorTicks: 5
    };
    gaugeData = google.visualization.arrayToDataTable([
        ['Patel', 'Nehru', 'RK'],
        [74, 61, 45]
    ]);
    gauge = new google.visualization.Gauge(document.getElementById('sports-gauge'));
    gauge.draw(gaugeData, gaugeOptions);

    gaugeOptions = {
        min: 0,
        max: 750,
        yellowFrom: 250,
        yellowTo: 375,
        greenFrom: 375,
        greenTo: 750,
        minorTicks: 5
    };
    gaugeData = google.visualization.arrayToDataTable([
        ['Nehru', 'LLR', 'RK'],
        [400, 280, 245]
    ]);
    gauge = new google.visualization.Gauge(document.getElementById('tech-gauge'));
    gauge.draw(gaugeData, gaugeOptions);
}

function drawVisualization() {
    // Create and populate the data table.
    var data = google.visualization.arrayToDataTable([
        ['x', 'Patel', 'Nehru', 'RK', 'Azad', 'LLR', 'HJB', 'MMM', 'LBS', 'MS', 'RP', 'SN'],
        ['Ad design', 1, 4, 2, 4, 3, 4, 4, 4, 4, 4, 4],
        ['Product design', 1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6],
        ['Case Study', 2, 1, 4, 5, 3, 6, 6, 6, 6, 6, 6],
        ['Biz Quiz', 2, 1, 5, 4, 3, 7, 7, 7, 6, 7, 7],
        ['Tech Quiz', 2, 1, 5, 3, 4, 8, 8, 8, 6, 6, 8],
        ['Maths Olympiad', 3, 1, 5, 2, 4, 9, 9, 5, 7, 7, 9],
        ['Chemical Innovation', 4, 1, 5, 3, 2, 10, 7, 6, 8, 8, 10],
        ['OpenSoft', 5, 1, 4, 3, 2, 10, 7, 6, 8, 8, 10],
        ['Hardware modelling', 5, 1, 3, 4, 2, 10, 8, 7, 9, 6, 10],
    ]);

    // Create and draw the visualization.
    new google.visualization.LineChart(document.getElementById('tech-visualization')).
            draw(data, {curveType: "function",
        width: 700, height: 380,
        vAxis: {title: 'Rank', maxValue: 10, direction: -1, textPosition: 'none', gridlines: {color: '#EEE', count: 10}}, title: 'GC Timeline Rank',
        hAxis: {title: 'GC Progress', textPosition: 'none', gridlines: {color: '#EEE', count: 10}}
    });
}


google.setOnLoadCallback(drawVisualization);
google.setOnLoadCallback(drawGauge);
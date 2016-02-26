google.load('visualization', '1', {packages: ['line']});
google.setOnLoadCallback(showCurrentReadings);

var reading = "";

// initialize datepickers
function initializeDatepickers() {
    var today = new Date();
    var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate()-3, today.getHours(), today.getMinutes(), today.getSeconds());
    $('#date1').datetimepicker({
        defaultDate: lastWeek,
        sideBySide: true,
        showTodayButton: true,
        showClose: true
    });
    $('#date2').datetimepicker({
        useCurrent: false, //Important! See issue #1075
        defaultDate: Date.now(),
        sideBySide: true,
        showTodayButton: true,
        showClose: true
    });
    var date1, date2;
    $("#date1").on("dp.hide", function (e) {
        $('#date1').data("DateTimePicker").date(e.date);
        if (reading == "temperature") {
            temperatureChart();
        }
        else if (reading == "moisture") {
            moistureChart();
        }
        else if (reading == "salinity") {
            salinityChart();
        }
    });
    $("#date2").on("dp.hide", function (e) {
        $('#date2').data("DateTimePicker").date(e.date);
        if (reading == "temperature") {
            temperatureChart();
        }
        else if (reading == "moisture") {
            moistureChart();
        }
        else if (reading == "salinity") {
            salinityChart();
        }
    });
}

function getDateString(date) {
    return date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? '0' : '')
        + (date.getMonth() + 1) + "-" + (date.getDate() < 10 ? '0' : '')
        + date.getDate() + " " + (date.getHours() < 10 ? '0' : '')
        + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '')
        + date.getMinutes() + ":" + (date.getSeconds() < 10 ? '0' : '')
        + date.getSeconds();
}

function showReadings(probeNum) {
    if (probeNum == "") {
        document.getElementById("probe_readings").innerHTML = "";
        return;
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("probe_readings").innerHTML = xmlhttp.responseText;
                var lastChecked = document.getElementsByClassName("reading-time");
                for (var i = 0; i < lastChecked.length; i++) {
                    lastChecked[i].innerHTML = "";
                }
                $.ajax({
                    type: 'POST',
                    url: '../application/getrecentreadingtime.php',
                    cache: false,
                    success: function(data) {
                        json = JSON.parse(data);
                        var date = new Date(json["reading_time"]);
                        var dateString = date.toDateString() + " at " + date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
                        var lastChecked = document.getElementsByClassName("reading-time");
                        for (var i = 0; i < lastChecked.length; i++) {
                            lastChecked[i].innerHTML = dateString;
                        }
                    },
                    error: function(data) {
                        document.getElementById("chart").innerHTML = "<h3>An error occurred. Please try again.</h3>";
                    }
                });
            }
        };
        xmlhttp.open("GET", "../application/getreadings.php?q="+probeNum,true);
        xmlhttp.send();
    }
}

function showCurrentReadings() {
    $("#current_readings").show();
    $("#chart").hide();
}

function temperatureChart() {
    $("#current_readings").hide();
    $("#chart").show();
    reading = "temperature";
    var date1 = new Date($('#date1').data("DateTimePicker").date()["_d"]);
    var date2 = new Date($('#date2').data("DateTimePicker").date()["_d"]);
    var u = "../application/gettemperaturedata.php?s='"
        + getDateString(date1) + "'&e='"
        + getDateString(date2) + "'";
    $.ajax({
        type: 'POST',
        url: u,
        cache: false,
        success: function(data){
            if (data == "") {
                document.getElementById("chart-add").innerHTML = "<h3>There is no data for the specified date range.</h3>";
            }
            else {
                json = JSON.parse(data);
                // create json object to hold temperatures for each reading time
                var chart_json = {};
                for (var i = 0; i < json.length; i++) {
                    if (chart_json.hasOwnProperty(json[i]["reading_time"])) {
                        chart_json[json[i]["reading_time"]]["temperature"].push(parseFloat(json[i]["temperature"]));
                        chart_json[json[i]["reading_time"]]["probe"].push(parseInt(json[i]["probe"]));
                    }
                    else {  // create new entry for new reading time
                        chart_json[json[i]["reading_time"]] = {};
                        chart_json[json[i]["reading_time"]]["temperature"] = [parseFloat(json[i]["temperature"])];
                        chart_json[json[i]["reading_time"]]["probe"] = [parseInt(json[i]["probe"])];
                    }
                }
                var data = new google.visualization.DataTable();
                data.addColumn('date', 'Time');
                data.addColumn('number', 'Probe 1');
                data.addColumn('number', 'Probe 2');
                data.addColumn('number', 'Probe 3');
                data.addColumn('number', 'Probe 4');
                var temp;
                var rows = [];
                for (var time in chart_json) {
                    var diff = 1;
                    temp = [];
                    temp.push(new Date(time));
                    for (var i = 1; i <= 4; i++) {
                        if (chart_json[time]["probe"][i-diff] == i) {
                            temp.push(chart_json[time]["temperature"][i-diff]);
                        }
                        else {
                            temp.push(null);
                            diff++;
                        }
                    }
                    rows.push(temp);
                }
                data.addRows(rows);
                var options = {
                    chart: {
                        title: 'Temperature',
                        subtitle: 'in degrees Fahrenheit'
                    },
                    width: 900,
                    height: 500,
                    interpolateNulls: true
                };
                var chart = new google.charts.Line(document.getElementById('chart-add'));
                chart.draw(data, options);
            }
        },
        error: function() {
            document.getElementById("chart").innerHTML = "<h3>An error occurred. Please try again.</h3>";
        }
    });
}

function moistureChart() {
    $("#current_readings").hide();
    $("#chart").show();
    reading = "moisture";
    var date1 = new Date($('#date1').data("DateTimePicker").date()["_d"]);
    var date2 = new Date($('#date2').data("DateTimePicker").date()["_d"]);
    var u = "../application/getmoisturedata.php?s='"
        + getDateString(date1) + "'&e='"
        + getDateString(date2) + "'";
    $.ajax({
        type: 'POST',
        url: u,
        cache: false,
        success: function(data){
            if (data == "") {
                document.getElementById("chart-add").innerHTML = "<h3>There is no data for the specified date range.</h3>";
            }
            else {
                json = JSON.parse(data);
                // create json object to hold temperatures for each reading time
                var chart_json = {};
                for (var i = 0; i < json.length; i++) {
                    if (chart_json.hasOwnProperty(json[i]["reading_time"])) {
                        chart_json[json[i]["reading_time"]]["moisture"].push(parseFloat(json[i]["moisture"]));
                        chart_json[json[i]["reading_time"]]["probe"].push(parseInt(json[i]["probe"]));
                    }
                    else {  // create new entry for new reading time
                        chart_json[json[i]["reading_time"]] = {};
                        chart_json[json[i]["reading_time"]]["moisture"] = [parseFloat(json[i]["moisture"])];
                        chart_json[json[i]["reading_time"]]["probe"] = [parseInt(json[i]["probe"])];
                    }
                }
                var data = new google.visualization.DataTable();
                data.addColumn('date', 'Time');
                data.addColumn('number', 'Probe 1');
                data.addColumn('number', 'Probe 2');
                data.addColumn('number', 'Probe 3');
                data.addColumn('number', 'Probe 4');
                var temp;
                var rows = [];
                for (var time in chart_json) {
                    var diff = 1;
                    temp = [];
                    temp.push(new Date(time));
                    for (var i = 1; i <= 4; i++) {
                        if (chart_json[time]["probe"][i-diff] == i) {
                            temp.push(chart_json[time]["moisture"][i-diff]);
                        }
                        else {
                            temp.push(null);
                            diff++;
                        }
                    }
                    rows.push(temp);
                }
                data.addRows(rows);
                var options = {
                    chart: {
                        title: 'Moisture',
                        subtitle: 'in some unit'
                    },
                    width: 900,
                    height: 500,
                    interpolateNulls: true
                };
                var chart = new google.charts.Line(document.getElementById('chart-add'));
                chart.draw(data, options);
            }
        },
        error: function() {
            document.getElementById("chart").innerHTML = "<h3>An error occurred. Please try again.</h3>";
        }
    });
}

function salinityChart() {
    $("#current_readings").hide();
    $("#chart").show();
    reading = "salinity";
    var date1 = new Date($('#date1').data("DateTimePicker").date()["_d"]);
    var date2 = new Date($('#date2').data("DateTimePicker").date()["_d"]);
    var u = "../application/getsalinitydata.php?s='"
        + getDateString(date1) + "'&e='"
        + getDateString(date2) + "'";
    $.ajax({
        type: 'POST',
        url: u,
        cache: false,
        success: function(data){
            if (data == "") {
                document.getElementById("chart-add").innerHTML = "<h3>There is no data for the specified date range.</h3>";
            }
            else {
                json = JSON.parse(data);
                // create json object to hold temperatures for each reading time
                var chart_json = {};
                for (var i = 0; i < json.length; i++) {
                    if (chart_json.hasOwnProperty(json[i]["reading_time"])) {
                        chart_json[json[i]["reading_time"]]["salinity"].push(parseFloat(json[i]["salinity"]));
                        chart_json[json[i]["reading_time"]]["probe"].push(parseInt(json[i]["probe"]));
                    }
                    else {  // create new entry for new reading time
                        chart_json[json[i]["reading_time"]] = {};
                        chart_json[json[i]["reading_time"]]["salinity"] = [parseFloat(json[i]["salinity"])];
                        chart_json[json[i]["reading_time"]]["probe"] = [parseInt(json[i]["probe"])];
                    }
                }
                var data = new google.visualization.DataTable();
                data.addColumn('date', 'Time');
                data.addColumn('number', 'Probe 1');
                data.addColumn('number', 'Probe 2');
                data.addColumn('number', 'Probe 3');
                data.addColumn('number', 'Probe 4');
                var temp;
                var rows = [];
                for (var time in chart_json) {
                    var diff = 1;
                    temp = [];
                    temp.push(new Date(time));
                    for (var i = 1; i <= 4; i++) {
                        if (chart_json[time]["probe"][i-diff] == i) {
                            temp.push(chart_json[time]["salinity"][i-diff]);
                        }
                        else {
                            temp.push(null);
                            diff++;
                        }
                    }
                    rows.push(temp);
                }
                data.addRows(rows);
                var options = {
                    chart: {
                        title: 'Salinity',
                        subtitle: 'in some unit'
                    },
                    width: 900,
                    height: 500,
                    interpolateNulls: true
                };
                var chart = new google.charts.Line(document.getElementById('chart-add'));
                chart.draw(data, options);
            }
        },
        error: function() {
            document.getElementById("chart").innerHTML = "<h3>An error occurred. Please try again.</h3>";
        }
    });
}

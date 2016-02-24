google.load('visualization', '1', {packages: ['line']});
google.setOnLoadCallback(showCurrentReadings);

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
            }
        };
        xmlhttp.open("GET", "../application/getreadings.php?q="+probeNum,true);
        xmlhttp.send();
    }
}

function showCurrentReadings() {
    $("#current_readings").show();
    $("#temperature").hide();
    $("#moisture").hide();
    $("#salinity").hide();
}

function showTemperature() {
    $("#current_readings").hide();
    $("#temperature").show();
    $("#moisture").hide();
    $("#salinity").hide();
    $.ajax({
        type: 'POST',
        url: '../application/gettemperaturedata.php',
        cache: false,
        success: function(data){
            if (data == "") {
                $("#temperature").append("<h3>There is no data for the specified date range.</h3>");
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
                var chart = new google.charts.Line(document.getElementById('temperature'));
                chart.draw(data, options);
            }
        },
        error: function() {
            $("#temperature").append("<h3>An error occurred. Please try again.</h3>");
        }
    });
}

function showMoisture() {
    $("#current_readings").hide();
    $("#temperature").hide();
    $("#moisture").show();
    $("#salinity").hide();
    $.ajax({
        type: 'POST',
        url: '../application/getmoisturedata.php',
        cache: false,
        success: function(data){
            if (data == "") {
                $("#moisture").append("<h3>There is no data for the specified date range.</h3>");
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
                        subtitle: 'in some kind of unit'
                    },
                    width: 900,
                    height: 500,
                    interpolateNulls: true
                };
                var chart = new google.charts.Line(document.getElementById('moisture'));
                chart.draw(data, options);
            }
        },
        error: function() {
            $("#moisture").append("<h3>An error occurred. Please try again.</h3>");
        }
    });
}

function showSalinity() {
    $("#current_readings").hide();
    $("#temperature").hide();
    $("#moisture").hide();
    $("#salinity").show();
    $.ajax({
        type: 'POST',
        url: '../application/getsalinitydata.php',
        cache: false,
        success: function(data){
            if (data == "") {
                $("#salinity").append("<h3>There is no data for the specified date range.</h3>");
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
                        subtitle: 'in some kind of measurement'
                    },
                    width: 900,
                    height: 500,
                    interpolateNulls: true
                };
                var chart = new google.charts.Line(document.getElementById('salinity'));
                chart.draw(data, options);
            }
        },
        error: function() {
            $("#salinity").append("<h3>An error occurred. Please try again.</h3>");
        }
    });
}

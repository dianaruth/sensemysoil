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
        xmlhttp.open("GET","../application/getreadings.php?q="+probeNum,true);
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
}

function showMoisture() {
    $("#current_readings").hide();
    $("#temperature").hide();
    $("#moisture").show();
    $("#salinity").hide();
}

function showSalinity() {
    $("#current_readings").hide();
    $("#temperature").hide();
    $("#moisture").hide();
    $("#salinity").show();
}

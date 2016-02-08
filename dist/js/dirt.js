$("#probe2readings").hide();
$("#probe3readings").hide();
$("#probe4readings").hide();

$("#probes").on("change", function() {
    switch(this.value) {
        case "1":
            probe1();
            break;
        case "2":
            probe2();
            break;
        case "3":
            probe3();
            break;
        case "4":
            probe4();
            break;
    }
});

function probe1() {
    $("#probe2readings").hide();
    $("#probe3readings").hide();
    $("#probe4readings").hide();
    $("#probe1readings").show();
}

function probe2() {
    $("#probe1readings").hide();
    $("#probe3readings").hide();
    $("#probe4readings").hide();
    $("#probe2readings").show();
}

function probe3() {
    $("#probe1readings").hide();
    $("#probe2readings").hide();
    $("#probe4readings").hide();
    $("#probe3readings").show();
}

function probe4() {
    $("#probe1readings").hide();
    $("#probe2readings").hide();
    $("#probe3readings").hide();
    $("#probe4readings").show();
}

$("#temperature").click(function() {
    $("#current_readings").hide();
    drawTemperatureChart("chart");
});

$("#moisture").click(function() {
    $("#current_readings").hide();
    drawMoistureChart("chart");
});

$("#salinity").click(function() {
    $("#current_readings").hide();
    drawSalinityChart("chart");
});
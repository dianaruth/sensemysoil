QUnit.test("getDateString", function(assert) {
    // tests the getDateString function with various dates
    assert.equal("2015-12-13 04:30:00", getDateString(new Date("December 13, 2015 04:30:00")));
    assert.equal("2014-04-12 00:00:00", getDateString(new Date(2014, 3, 12)));
    assert.equal("1969-12-31 18:00:02", getDateString(new Date(2016)));
    assert.equal("2012-08-14 05:13:00", getDateString(new Date(2012, 7, 14, 5, 13, 0)));
});

QUnit.test("showCurrentReadings", function(assert) {
    // tests that showReadings modifies the DOM to display the current readings
    $("#current_readings").css("display: none;");
    $("#chart").css("display: block;");
    assert.ok($("#current_readings").css('display') == "block");
    assert.ok($("#chart").css('display') == "none");
    showCurrentReadings();
    assert.ok($("#current_readings").css('display') == "block");
    assert.ok($("#chart").css('display') == "none");
});

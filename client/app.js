function getBathValue() {
    var bathrooms = document.getElementsByName("uiBathrooms");
    for (var i = 0; i < bathrooms.length; i++) {
        if (bathrooms[i].checked) {
            return parseInt(bathrooms[i].value);
        }
    }
    return -1;
}

function getBHKValue() {
    var bhk = document.getElementsByName("uiBHK");
    for (var i = 0; i < bhk.length; i++) {
        if (bhk[i].checked) {
            return parseInt(bhk[i].value);
        }
    }
    return -1;
}

function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");

    var sqft = document.getElementById("uiSqft").value;
    var bhk = getBHKValue();
    var bath = getBathValue();
    var location = document.getElementById("uiLocations").value;
    var estPrice = document.getElementById("uiEstimatedPrice");

    var url = "http://127.0.0.1:5000/predict_home_price";

    $.ajax({
        url: url,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            total_sqft: parseFloat(sqft),
            bhk: bhk,
            bath: bath,
            location: location
        }),
        success: function (data) {
            estPrice.innerHTML =
                "<h2>" + data.estimated_price + " Lakh</h2>";
        },
        error: function (err) {
            console.error(err);
            estPrice.innerHTML = "<h2>Error</h2>";
        }
    });
}

function onPageLoad() {
    console.log("document loaded");

    var url = "http://127.0.0.1:5000/get_location_names";

    $.get(url, function (data) {
        if (data && data.locations) {
            var uiLocations = document.getElementById("uiLocations");
            $('#uiLocations').empty();

            $('<option disabled selected>Choose a Location</option>')
                .appendTo(uiLocations);

            for (var i = 0; i < data.locations.length; i++) {
                $('<option></option>')
                    .val(data.locations[i])
                    .text(data.locations[i])
                    .appendTo(uiLocations);
            }
        }
    });
}

// JS is at bottom → safe to call directly
onPageLoad();

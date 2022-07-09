function process_response(data){
    jQuery("#cityTemperature").html(data.main.temp);
}

function init_ajax(){
    city_name = $("#x").val()
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=3eb5b2b507617561e108dda7e8905893&units=metric`,
        type: "GET",
        success: process_response
    })
}

function setup(){
    $("#y").click(init_ajax)
}

$(document).ready(setup)
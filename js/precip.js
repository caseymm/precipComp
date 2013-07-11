var cityID;
var city;
var amt;
var metric;


$(document).ready(function() {

$('#cylA').hide();
$('#cylB').hide();
$('.red').hide();
$('.blue').hide();
$('.borderRed').hide();
$('.borderBlue').hide();
$('.redB').hide();
$('.blueB').hide();
$('.borderRedB').hide();
$('.borderBlueB').hide();

$.ajax({
    type: "GET",
    url: "data/precipData.xml",
    dataType: "xml",
    success: makeItRain
    });
});

function precise_round(num,decimals){
return Math.round(num*Math.pow(10,decimals))/Math.pow(10,decimals);
}

function makeItRain(xml) {

$(xml).find("Row").each(function(){

    cityID = $(this).attr("id");
    city = $(this).find("city").text();
    amt = parseFloat($(this).find("amt").text());
    

    $('<option value="' + amt + '" id="' + cityID + '">' + city + '</option>').appendTo('.selectCity');
		console.log('appending');
    $('<option value="' + amt + '" id="' + cityID + '">' + city + '</option>').appendTo('.selectCityB');

    
    });

    
    $(".selectCity").change(function()
    {
        var sel = $(this).children("option:selected");
        city = sel.text();
        amt = sel.attr("value");
        metric = precise_round(amt*2.54,2);
        $(".name").html(city);
        $(".ammount").html(amt + " in. ");
        $(".meters").html(metric + " cm ");
        var object = document.getElementById("A1");
        object.setAttribute("height", (amt*15));
        object.setAttribute("y", (549-amt*15));
        var animation = document.getElementById("A2");
        animation.setAttribute("dur", 3);
        //animation.addEventListener("keyup",function(){
        animation.beginElement();
        //},false);
        
        $('#cylA').show();
        $('.red').show();
        $('.blue').show();
        $('.borderRed').show();
        $('.borderBlue').show();
        //$('.selectCity').load('#cylA', function() {});
    });
    
    $(".selectCityB").change(function()
    {
        var sel = $(this).children("option:selected");
        city = sel.text();
        amt = sel.attr("value");
        metric = precise_round(amt*2.54,2);
        $(".nameB").html(city);
        $(".ammountB").html(amt + " in. ");
        $(".metersB").html(metric + " cm ");
        var object = document.getElementById("B1");
        object.setAttribute("height", (amt*15));
        object.setAttribute("y", (549-amt*15));
        var animation = document.getElementById("B2");
        animation.setAttribute("dur", 3);
        //animation.addEventListener("keyup",function(){
        animation.beginElement();
        //},false);
        $('#cylB').show();
        $('.redB').show();
        $('.blueB').show();
        $('.borderRedB').show();
        $('.borderBlueB').show();
        //$('#cylB').load('#cylB', function() {});
    });
    

};
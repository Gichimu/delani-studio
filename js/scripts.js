$(document).ready(function(){
    $("img#icon1").click(function(){
        $(".text-hidden").toggle();
        $(".text-showing").toggle();
    });

    $("img#icon2").click(function(){
        $(".text-hidden").toggle();
        $(".text-showing").toggle();
    });

    $("img#icon3").click(function(){
        $(".text-hidden").hide("p#desc3");
        $(".text-showing").show("p#desc3");
    });
});
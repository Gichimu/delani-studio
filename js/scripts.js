$(document).ready(function(){
    //This is for the What-we-do section
    $("img#icon1").click(function(){
        $("img#icon1").hide();
        $("p#desc1").show();
    });
    $("p#desc1").click(function(){
        $("p#desc1").hide();
        $("img#icon1").show();
    });
    

    $("img#icon2").click(function(){
        $("img#icon2").hide();
        $("p#desc2").show();
    });
    $("p#desc2").click(function(){
        $("p#desc2").hide();
        $("img#icon2").show();
    });

    $("img#icon3").click(function(){
        $("img#icon3").hide();
        $("p#desc3").show();
    });
    $("p#desc3").click(function(){
        $("p#desc3").hide();
        $("img#icon3").show();
    });


    //This is for the portfolio section
    
    $("#img1").mouseenter(function(){
        $("#img1", "#img2", "#img3", "#img4", "#img5", "#img6", "#img7", "#img8").removeClass();
        $("#img1").addClass("overlay");
        $("#project1text").show();
    });
    $("#img1").mouseleave(function(){
        $("#img1").removeClass();
        $("#project1text").hide();
    });


    $("#img2").mouseenter(function(){
        $("#img1", "#img2", "#img3", "#img4", "#img5", "#img6", "#img7", "#img8").removeClass();
        $("#img2").addClass("overlay");
        $("#project2text").show();
    });
    $("#img2").mouseleave(function(){
        $("#img2").removeClass();
        $("#project2text").hide();
    });


    $("#img3").mouseenter(function(){
        $("#img1", "#img2", "#img3", "#img4", "#img5", "#img6", "#img7", "#img8").removeClass();
        $("#img3").addClass("overlay");
        $("#project3text").show();
    });
    $("#img3").mouseleave(function(){
        $("#img3").removeClass();
        $("#project3text").hide();
    });
    

    $("#img4").mouseenter(function(){
        $("#img1", "#img2", "#img3", "#img4", "#img5", "#img6", "#img7", "#img8").removeClass();
        $("#img4").addClass("overlay");
        $("#project4text").show();
    });
    $("#img4").mouseleave(function(){
        $("#img4").removeClass();
        $("#project4text").hide();
    });


    $("#img5").mouseenter(function(){
        $("#img1", "#img2", "#img3", "#img4", "#img5", "#img6", "#img7", "#img8").removeClass();
        $("#img5").addClass("overlay");
        $("#project5text").show();
    });
    $("#img5").mouseleave(function(){
        $("#img5").removeClass();
        $("#project5text").hide();
    });


    $("#img6").mouseenter(function(){
        $("#img1", "#img2", "#img3", "#img4", "#img5", "#img6", "#img7", "#img8").removeClass();
        $("#img6").addClass("overlay");
        $("#project6text").show();
    });
    $("#img6").mouseleave(function(){
        $("#img6").removeClass();
        $("#project6text").hide();
    });


    $("#img7").mouseenter(function(){
        $("#img1", "#img2", "#img3", "#img4", "#img5", "#img6", "#img7", "#img8").removeClass();
        $("#img7").addClass("overlay");
        $("#project7text").show();
    });
    $("#img7").mouseleave(function(){
        $("#img7").removeClass();
        $("#project7text").hide();
    });


    $("#img8").mouseenter(function(){
        $("#img1", "#img2", "#img3", "#img4", "#img5", "#img6", "#img7", "#img8").removeClass();
        $("#img8").addClass("overlay");
        $("#project8text").show();
    });
    $("#img8").mouseleave(function(){
        $("#img8").removeClass();
        $("#project8text").hide();
    });
    
});
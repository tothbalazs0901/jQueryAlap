


$(function (){
    $("#kezd").on("click", init);
});

function init(){
//    $("div").eq(0).text('Ez a div szövege');
//    $("div").eq(0).html('Ez a <b>div</b> szövege');//ez felülírja az előző sort
//    $("div").eq(0).append('Ez egy másik <b>div</b> szöveg');
//    $("div").eq(0).prepend('Ez egy elérakott <b>div</b> szöveg');
//    $("div").eq(0).before('Ezt egy <b>div</b> elé rakott szöveg');
    $("jatekter").empty();
    for (var i = 0; i < 5; i++) {
        $("#jatekter").append("<div>");
        $("#jatekter div").eq(i).append("<img>");
//        $("#jatekter div img").eq(i).attr("src", "kep.jpg");
//        $("#jatekter div img").eq(i).attr("alt", "TapsiHapsi");
        $("#jatekter div img").eq(i).attr({"src":"kep.jpg","alt":"TapsiHapsi"});
    }
    
    $("jatekter div").addClass("kartya");
    $("jatekter div").css({"background-color":"pink","padding":"2%"});
//    $("jatekter div").mouseenter(function(){
//        $(this).css({"background-color":"red", "padding":"2%"});
//    });
//    $("jatekter div").mouseleave(function(){
//        $(this).css({"background-color":"cyan", "padding":"2%"});
//    });
    $("jatekter div").hover(
        function(){
            $(this).css({"background-color":"red", "padding":"2%"});
        },
        function(){
            $(this).css({"background-color":"cyan", "padding":"2%"});
            });
    $("jatekter div").click(function (){
        $(this).hide(1000);
        $(this).show(1000);
    });
}
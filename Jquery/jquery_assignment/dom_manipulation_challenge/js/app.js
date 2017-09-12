$(document).ready(function(){

$("#edit-header").text("The Jquery challengers");
$("#box1").css("background-color", "green");
$("#para1").css("font-weight", "bold");
$("#para1").css("font-size", "24px");
$(".box2").addClass("spin");
$("#button1").click(function(){
alert("you clicked me")
});
$("#box3").hover(function(){
    $(this).css("background-color", "green")
});
$("#input1").keyup(function(){
var x= $("#input1").val();
    console.log(x);

});
$("#box4").animate({"left":"+=400px","top":"+=150px"}, 2000);





});




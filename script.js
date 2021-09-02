$(document).ready(function() {
function updateTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        if (minutes < 10){
            minutes = "0" + minutes;
        }
        var real_hours = hours - 12;
        if (hours > 11){
          real_hours - 12;
        } else {
          real_hours = hours;
        }
   if (real_hours === 0) {
    real_hours = real_hours + 12;
 } 
        var v = real_hours + ":" + minutes + " ";
   
        if(hours > 11){
            v+="PM";
        } else {
            v+="AM"
        }
        setTimeout("updateTime()",1000);
        document.getElementById("time").innerHTML=v;
    }
   updateTime();
//Tắt điện thoại
 $("#time").hide();
 $("#slide_on").hide();
 $("#app1").hide(); 
 $("#app2").hide();
 $("#app3").hide();
 $("#app4").hide();
 $("#newsBar").hide();
 $("#newsOnBar").hide();
 $("#slideOnTrack").hide(); 
 $("#newsBarLine1").hide(); 
 $("#newsBarLine2").hide();
 $("#phoneSign").hide();
 $("#mailSign").hide(); 
 $("#more").hide(); 
// Bật điện thoại
  $("#button").one("click",function(){  
    $("#screen").css("background","#133f7b");
    $("#time").show();
    $("#slide_on").show();
    $("#newsBar").show();
    $("#newsOnBar").show();
    $("#slideOnTrack").show();
  }); 
  $("#slide_on").click(function(){
    
    click_button = true;
    $(this).animate({ 
        marginLeft: "+=170px",
    }, 400 );
    $("#slide_on").fadeOut(300);
    $("#slideOnTrack").fadeOut(800);
    $("#slide_on").delay(30).hide(0);
    $("#time").fadeOut(800);
    setTimeout(function(){
    $("#newsBar").animate({marginTop: "-=140px",},800);
    $("#newsOnBar").animate({marginTop: "-=170px",},800);
    },800);
    setTimeout(function(){
      $("#time").animate({marginLeft: "+=180px",},0).animate({marginTop: "-=50px",},0).css("font-size","20px").fadeIn(800); 
         }, 800);
    setTimeout(function(){
      $("#newsBarLine1").show(); 
      $("#newsBarLine2").show();
      $("#phoneSign").show();
      $("#mailSign").show();
      $("#more").show();
    }, 1600);
    
    setTimeout(function(){
      $("#app1").fadeIn(800);
      }, 1600);
    setTimeout(function(){
      $("#app2").fadeIn(800);
      }, 1650);
    setTimeout(function(){
      $("#app3").fadeIn(800);
      }, 1700);
    setTimeout(function(){
      $("#app4").fadeIn(800);
      }, 1750);
   
  });// of slide butto mode, continue    
  
// oppening game apps
setTimeout(function(){
 
  $("#app1").click(function(){
    setTimeout(function(){
      $(".apps").fadeOut(800);
      $("#newsBarLine1").fadeOut(800);
      $("#newsBarLine2").fadeOut(800);
      $("#phoneSign").fadeOut(800);
      $("#mailSign").fadeOut(800);
    $("#time").fadeOut(800);
    $("#newsBar").fadeOut(800);
    $("#newsOnBar").fadeOut(800);
    $("#more").fadeOut(800);
      setTimeout(function(){
        $("#screen").css("background","#FFF");
        $("#inputField").show();
      }, 800); 
    }, 400);
  });  
 }, 1000);
 
// end of oppening game apps 
  
  
  
  
});
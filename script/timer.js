$("html, body").animate({scrollTop:0},"slow");var countDownDate=new Date("Apr 18, 2018 00:00:00").getTime(),x=setInterval(function(){var e=(new Date).getTime(),t=countDownDate-e,a=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5),l=Math.floor(t%36e5/6e4),o=Math.floor(t%6e4/1e3);document.getElementById("time").innerHTML=a+" Days  "+n+" Hrs  "+l+" Mins  "+o+" Secs  to Go... ",t<0&&(clearInterval(x),document.getElementById("time").innerHTML="Celebration Day !!!")},1e3);setInterval(swapImages,5e3);var slideIndex=1;function swapImages(){6==slideIndex?($("#imgSlide").addClass("home1"),$("#imgSlide").removeClass("home6"),slideIndex=1):($("#imgSlide").addClass("home"+(slideIndex+1)),$("#imgSlide").removeClass("home"+slideIndex),slideIndex++)}
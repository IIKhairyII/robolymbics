$(document).ready(function(){
    $("#single").click(function(){
        $("#form").delay(900).fadeIn();
        $("#form").load("forms/indv.html");
        document.getElementById("single").style.animation = "toTop 2s forwards";
        document.getElementById("team").style.animation = "toTop 2s forwards"; 
        document.getElementById("team").style.animationDelay = "0.1s";
        document.getElementById("team").style.opacity = 1;
        document.getElementsByClassName("interface")[0].classList.remove("show_interface");
        document.getElementsByClassName("interface")[0].classList.add("hide_interface");
    });
    $("#team").click(function(){
        $("#form").delay(900).fadeIn();
        $("#form").load("forms/team.html");
        document.getElementById("team").style.animation = "toTop 2s forwards";
        document.getElementById("single").style.animation = "toTop 2s forwards"; 
        document.getElementById("single").style.animationDelay = "0.1s";
        document.getElementById("single").style.opacity = 1;
        document.getElementsByClassName("interface")[0].classList.remove("show_interface");
        document.getElementsByClassName("interface")[0].classList.add("hide_interface");
    });
   /* $(".bi").click(function(){
        alert("hi");
        $("#form").fadeOut();
        //document.getElementsByClassName("interface")[0].classList.add("hide_interface");
    });*/
});
function back_menu(){
    $("#form").fadeOut(); 
    document.getElementsByClassName("interface")[0].classList.remove("hide_interface");
    document.getElementsByClassName("interface")[0].classList.add("show_interface");
    document.getElementById("team").style.animation = "toBottom 2s forwards";
    document.getElementById("single").style.animation = "toBottom 2s forwards"; 
    
    document.getElementById("team").style.transition = "all ease-out 0.3s";
    document.getElementById("single").style.transition = "all ease-out 0.3s"; 
}
/*function get(){
    let xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          document.getElementById("form").innerHTML = xhr.responseText;
        }};
    xhr.open("GET", "forms/indv.html");
    xhr.send();
}
document.querySelector("button").addEventListener("click", function(){
    get();
})*/
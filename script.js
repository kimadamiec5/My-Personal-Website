$(document).ready(function(){
     $(".img").hover(function(){
         $(this).toggleClass(".img-large");
     });
    
});

function loadRepo(){
    const xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ===200){
            results = JSON.parse(this.responseText)
            ;
            document.getElementById("first Repo").innerHTML = results[0].name
        }
    }
    xhttp.open("GET", "https://api.github.com/users/kimadamiec5/repos", true);
    xhttp.send();
}

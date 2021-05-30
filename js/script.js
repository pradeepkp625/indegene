const click= document.querySelector(".menu span");
click.addEventListener("click",function(){
    var x = document.querySelector(".menu__overlay");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
        x.style.display = "none";
    }
})
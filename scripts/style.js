
function myAbout (){
    var x =document.getElementById("about-content");
    if (x.style.display=='none')
    {
        x.style.display='flex';
    }
    else 
    {
        x.style.display='flex';
    }
}



function bgchanger (){
 if (this.scrollY> window.innerHeight/1.5)
 {
     document.body.classList.add("bg-active");
     document.header.classList.add("bg-active");
 }
 else 
 {
    document.body.classList.remove("bg-active");
    document.header.classList.remove("bg-active");
 }

}

window.addEventListener("scroll",bgchanger);
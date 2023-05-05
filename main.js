var concontainer = document.getElementsByClassName("concontainer");
 var i ;

 for ( i = 0; i < concontainer.length; i++){
    concontainer[i].addEventListener("click",function(){
        var des = this.nextElementSibling;
        if(des.style.display == "block"){
            des.style.display = "none" ;
        }
        else{
            des.style.display = "block";
        }

});
}

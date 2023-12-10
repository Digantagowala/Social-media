 let btn = document.querySelector("button")
 let add= document.querySelector("#add")
 
 
 var pp=0

 add.addEventListener("click", function(){
    if(pp==0){
        add.innerHTML="Cancel"
    add.style.color="green"
    pp=1
    }else{
        add.innerHTML="Add Friend"
        add.style.color="Blue"
        pp=0
    }

 })





let btn = document.querySelector('.btn');
let login = document.querySelector('.logInput');
let pass = document.querySelector('.pasInput');

function myFunction() {
  
}

btn.addEventListener('click', function(){
    if (login.value){

        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");

    }if(!login.value){
        
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }
})

login.addEventListener('focus', function(){
   login.style.borderColor = "#6FC6FF";
})
pass.addEventListener('focus', function(){
    pass.style.borderColor = "#6FC6FF";
})
login.addEventListener('blur', function(){
   login.style.borderColor = "#2f364f";
})
pass.addEventListener('blur', function(){
    pass.style.borderColor = "#2f364f";
})


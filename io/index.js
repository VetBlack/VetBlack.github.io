// Global Variables
let btn = document.querySelector('.btn');
let login = document.querySelector('.logInput');
let pass = document.querySelector('.pasInput');
let pop = document.querySelector('.popupBlock');
let popup1 = document.getElementById("myPopup");
let popup2 = document.getElementById("myPopup2");

btn.addEventListener('click', function(){
    if (login.value && login.value != 1111){          
        popup1.classList.add("show");
        popup2.classList.add("show");

        login.style.borderBottomColor= "red";
        pass.style.borderBottomColor= "red";
        setTimeout(function(){
            popup1.classList.remove("show");
            popup2.classList.remove("show");
            login.style.borderBottomColor= "#2f364f";
            pass.style.borderBottomColor= "#2f364f";    
        }, 3000)
        
    }if(!login.value){               
        popup1.classList.add("show");
        popup2.classList.add("show");

        login.style.borderBottomColor= "red";
        pass.style.borderBottomColor= "red";
        setTimeout(function(){
            popup1.classList.remove("show");
            popup2.classList.remove("show");
            
            login.style.borderBottomColor= "#2f364f";
            pass.style.borderBottomColor= "#2f364f";    
        }, 3000)
    }if(login.value == 1111 && pass.value == 1111){
        login.style.borderBottomColor= "green";
        pass.style.borderBottomColor= "green";
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


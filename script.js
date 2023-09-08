const pass = document.getElementById("password");
const msg = document.getElementById("message");
const str = document.getElementById("strength");

pass.addEventListener('input',()=>{
    if(pass.value.length > 0){
        msg.style.display="block";
        if(pass.value.length < 4){
            str.innerHTML = "weak";
            msg.style.color = "#ff5925";
            pass.style.borderColor = "#ff5925";
        }else if(pass.value.length >= 4 && pass.value.length < 8){
            str.innerHTML = "medium";
            msg.style.color = "yellow";
            pass.style.borderColor = "yellow";
        }else{
            str.innerHTML = "strong";
            msg.style.color = "#26d730";
            pass.style.borderColor = "#26d730";
        }
    }else{
        msg.style.display="none";
        pass.style.borderColor="#ccc";
    }

});
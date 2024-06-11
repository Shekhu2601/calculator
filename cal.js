let string = "";
let buttons =document.querySelectorAll(".num");
let multiply =document.querySelectorAll(".num");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string = eval(string);
            document.querySelector('input').value=string;
            
        }  
        
       else if(e.target.innerHTML=='Del.'){
            string = string.toString().slice(0,-1) ;
            document.querySelector('input').value=string;0
        }  
        else if(e.target.innerHTML=='Reset'){
            string = "";
            document.querySelector('input').value=string;
        } 
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
    
})
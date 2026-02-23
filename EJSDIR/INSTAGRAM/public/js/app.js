let btns = document.querySelectorAll("button");
for(let btn of btns){
    btn.style.padding = "10px 20px"
    btn.style.border = "3px solid black"
    btn.style.borderRadius = "8px"
    btn.style.backgroundColor = "gold"
    btn.addEventListener("click", ()=>{
        alert("Button was clicked!")
        console.log('button was clicked');
        
    });
}
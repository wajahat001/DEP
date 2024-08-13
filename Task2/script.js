
function main(){

    document.querySelector(".head1").addEventListener("click", () => {
        const body1 = document.querySelector(".body1");
        const arrow = document.querySelector(".up");
        
        
        if (body1.style.left === "20px") {
            body1.style.left = "-1200px";
            arrow.setAttribute("src", "arrow-down.svg"); 
        } else {
            body1.style.left = "20px";
            arrow.setAttribute("src", "arrow-up.svg"); 
        }
    });
    document.querySelector(".head2").addEventListener("click", () => {
        const body2 = document.querySelector(".body2");
        const arrow = document.querySelector(".up");
        
        
        if (body2.style.left === "20px") {
            body2.style.left = "-1200px";
            arrow.setAttribute("src", "arrow-down.svg"); 
        } else {
            body2.style.left = "20px";
            arrow.setAttribute("src", "arrow-up.svg"); 
        }
    });


    
let modal = document.getElementById("myModal");
let btn = document.getElementById("openModal");

let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change",(e)=>{
     let output=document.querySelector(".output")
     output.innerHTML=((parseInt(e.target.value)/100)*100)
     
    
   
})


}
main()
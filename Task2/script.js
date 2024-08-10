
function main(){

    document.querySelector(".head1").addEventListener("click", () => {
        const body1 = document.querySelector(".body1");
        const arrow = document.querySelector(".up");
        
        // Check the current position and toggle it
        if (body1.style.left === "20px") {
            body1.style.left = "-1200px";
            arrow.setAttribute("src", "arrow-down.svg"); // Change the arrow direction
        } else {
            body1.style.left = "20px";
            arrow.setAttribute("src", "arrow-up.svg"); // Change the arrow direction
        }
    });
    

}
main()
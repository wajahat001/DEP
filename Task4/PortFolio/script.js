let bios= document.getElementsByClassName("bio")
let contents = document.getElementsByClassName("content")
// let actlink = document.getElementsByClassName("act-link")

function opentab(tabname){
    for(const bio of bios){
        bio.classList.remove("act-link")
    }
    for(const content of contents){
        content.classList.remove("act-content")
    }
    event.currentTarget.classList.add("act-link")
    document.getElementById(tabname).classList.add("act-content")
}
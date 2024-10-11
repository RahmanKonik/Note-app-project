
// create a variable based on html class name where I want to use js logic.

let myButton = document.querySelector(".myButton");

let inputContainer = document.querySelector(".input-container");

let container = document.querySelectorAll(".input-box");


// showing data after store the note and update or refresh.

function showNote(){

    inputContainer.innerHTML = localStorage.getItem("container");

}

showNote();

// note update

function updateStorage(){
    localStorage.setItem("container", inputContainer.innerHTML);
}



myButton.addEventListener("click", ()=>{

    let input = document.createElement("p");
    let img = document.createElement("img");

    input.className = "input-box";
    input.setAttribute("contenteditable","true");
    img.src="image/Delete.png";

    inputContainer.appendChild(input).appendChild(img);

})

// add a function for deleting a note after clicking delete image

inputContainer.addEventListener("click", function(e){

    if(e.target.tagName === "IMG"){

        e.target.parentElement.remove();
        updateStorage();

    }
    else if (e.target.tagName === "P"){
        container = document.querySelectorAll(".input-box");
        container.forEach(c =>{
            c.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

// add a function for clicking a new line after clicking the enter into user keyboard.

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
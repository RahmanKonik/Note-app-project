

// create a js constant variable by using html id, one for button, one for img delete button, one for input text field.

let createContainer = document.querySelector(".notes-container");
let createButton = document.querySelector(".button");
let createInputBox = document.querySelectorAll(".input-box");

// showing the note and storing localling.

function showNotes(){
    createContainer.innerHTML = localStorage.getItem("createInputBox");
}

// calling the shownotes function.

showNotes();

// updating the note

function updateStorage(){
    localStorage.setItem("createInputBox", createContainer.innerHTML);
}

// Create a note by clicking the button

createButton.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className ="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="image/Delete.png";
    createContainer.appendChild(inputBox).appendChild(img);

})

// adding a function for deleting a note

createContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }
    else if (e.target.tagName === "P"){
        createInputBox = document.querySelectorAll(".input-box");
        createInputBox.forEach(cib =>{
            cib.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

// after clicking the enter from keyborad, it will be take line break.
// other event will be default change.

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
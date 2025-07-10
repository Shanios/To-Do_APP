// let arrayfornote = [];
// const notecontainer = document.getElementById("notecontainer");
//function deletes()
// {
//
// }

// function saves() {
//   const itemcontainer = document.getElementsByClassName("item-container")[0];
//   const div3 = document.createElement("div");
//   const deletess = document.createElement("button");
//   if (textarea.value == "") {
//     alert(`type something dumbass`);
//   } else {

    
//     div3.id = "note1"; // add an ID
    
//     div3.classList.add("singlenote");
    
//     itemcontainer.appendChild(div3);
    
//     const textarea = document.getElementById("textarea");
    
//     console.log(textarea.value);
    
//     div3.appendChild(deletess);
    
//     deletess.innerText = "Delete";
    
//     // console.log(textarea.innerText);
    
//     deletess.classList.add("deletebutton");
    
//     const noteText = document.createElement("p");
    
//     div3.appendChild(noteText);
//     noteText.textContent = textarea.value;
//     arrayfornote.push(textarea.value);
//     div3.textContent = noteText.textContent;
//     console.log(arrayfornote);
//     textarea.value = "";
//   }
// }
// window.addEventListener("DOMContentLoaded", () => {
//   const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
//   arrayfornote = savedNotes;

//   savedNotes.forEach(note => saves(note));
// });
let arrayfornote = [];
const notecontainer = document.getElementById("notecontainer");
const textarea = document.getElementById("textarea");

function saves() { 
    const itemcontainer = document.getElementsByClassName("item-container")[0];
    const div3 = document.createElement("div");
    const deletess = document.createElement("button");
    const short = document.createElement("button")
    
       div3.appendChild(short)
       short.innerText ="::"
       short.classList.add("shorts")

    if (textarea.value.trim() === "") {
        alert(`Type something dumbass`);
    } else {
        div3.id = "note1"; 
        div3.classList.add("singlenote");

        // Create and set up note text
        const noteText = document.createElement("p");
        noteText.textContent = textarea.value;
       
        // Create and set up delete button
        deletess.innerText = "X";
        deletess.classList.add("deletebutton");

        // Append text and delete button to the note div
        div3.appendChild(deletess);
        div3.appendChild(noteText);
        
        itemcontainer.appendChild(div3);
    

        // Add to array
        arrayfornote.push(textarea.value);
       localStorage.setItem("notes", JSON.stringify(arrayfornote));
        console.log(localStorage.removeItem(textarea.value));
        
        console.log(arrayfornote);

        // Clear textarea
        textarea.value = "";
 short.addEventListener("click", () => {
    div3.classList.toggle("makeitshort")

 });
        // Add delete functionality
        deletess.addEventListener("click", () => {
            itemcontainer.removeChild(div3);
         const index = arrayfornote.indexOf(noteText.textContent);
if (index !== -1) {
    
    arrayfornote.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(arrayfornote)) // removes only the first match
}
        });

    }
}

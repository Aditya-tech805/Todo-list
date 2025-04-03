const textarea = document.getElementById("textarea");
const addtodo = document.getElementById("addtodo");
const todocant = document.getElementsByClassName("todocontainer")[0];

addtodo.style.backgroundColor = 'aqua';

// Function to add a  todo in my container 
function addTodo() {
    const todotext = textarea.value.trim();
    if (todotext === "") return; // Prevent adding empty todos in the list 

    const todoitem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            tododiv.style.textDecoration = "line-through";
        } else {
            tododiv.style.textDecoration = "none";
        }
    });

    const tododiv = document.createElement("div");
    tododiv.innerText = todotext;
    tododiv.style.display = "inline";

    const deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete";
    deletebtn.style.background = "red";

    deletebtn.addEventListener("click", function () {
        deletebtn.parentElement.remove();
    });

    todoitem.appendChild(checkbox);
    todoitem.appendChild(tododiv);
    todoitem.appendChild(deletebtn);

    todocant.append(todoitem);
    textarea.value = "";
}

// Click event for the button
addtodo.addEventListener("click", addTodo);

// Keydown event for pressing Enter
textarea.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});

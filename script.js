const textarea = document.getElementById("textarea");
const addtodo = document.getElementById("addtodo");
const todocant = document.getElementsByClassName("todocontainer")[0];

addtodo.style.backgroundColor = 'aqua';

// Function to add a  todo in my container 
function addTodo() {
    const todotext = textarea.value.trim();
    if (todotext === "") return; // Prevent adding empty todos in the list 

    const todoitem = document.createElement("li");

    const tododiv = document.createElement("div");
    tododiv.innerText = todotext;
    tododiv.style.display = "inline";

     // here in this function actually i am want to make my tododiv editable 
    tododiv.addEventListener("click",function(){
    const currentText=tododiv.innerText;

    const input =document.createElement("input");
    input.type="text";
    input.value=currentText;
    input.style.marginRight= "10px";

    tododiv.replaceWith(input);
    input.focus();

    function saveEdit() {
        const newText = input.value.trim();
        if (newText !== "") {
            tododiv.innerText = newText;
        }
        input.replaceWith(tododiv);
    }

    input.addEventListener("blur", saveEdit);

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            saveEdit();
        }
    });
  });

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
      if (this.checked) {
          tododiv.style.textDecoration = "line-through";
      } else {
          tododiv.style.textDecoration = "none";
      }
  });

    const deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete";
    deletebtn.style.background = "red";

    const Edittbtn =document.createElement("button");
    Edittbtn.innerText ="Edit";
    Edittbtn.style.background="red";


    Edittbtn.addEventListener("click", function ( ){
        const currentText = tododiv.innerText;

        const input = document.createElement("input");
        input.type = "text";
        input.value = currentText;
        input.style.marginRight = "10px";
    
        tododiv.replaceWith(input);
        input.focus();
    
        // Save on blur or Enter key
        function saveEdit() {
            const newText = input.value.trim();
            if (newText !== "") {
                tododiv.innerText = newText;
            }
            input.replaceWith(tododiv);
        }
    
        input.addEventListener("blur", saveEdit);
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                saveEdit();
            }
        });
    });


    deletebtn.addEventListener("click", function () {
        deletebtn.parentElement.remove();
    });

    todoitem.appendChild(checkbox);
    todoitem.appendChild(tododiv);
    todoitem.appendChild(deletebtn);
    todoitem.appendChild(Edittbtn);

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
// this function help to save the todo content whenever i click on the page 
textarea.addEventListener("blur", function(){
    if(textarea.value.trim() !==""){
    addTodo();
    }


});   



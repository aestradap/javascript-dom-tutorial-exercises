// Your code here
const list = document.getElementById("my_ul");
const input = document.getElementById("addToDo");

// delete element
list.addEventListener("click", function(e) {
    console.log(e);
//   if (e.target.matches(".fa-trash")) {
//     e.target.parentElement.parentElement.remove();
//   }
});

list.addEventListener("click", deleteTask);

function deleteTask(event) {
    console.log(event)
    // const clickedElement = event.target;
    // if (clickedElement.classList.contains("fa-trash")) {
    //   const listItem = clickedElement.parentElement.parentElement;
    //   todoList.removeChild(listItem);
    // }
  }
  
// Your code here
const list = document.getElementById("my_ul");
const input = document.getElementById("addToDo");


const deleteTask = (e) => {
    if (e.target.matches(".fa-trash")) {
        e.target.parentElement.parentElement.remove();
    return true;
    }  
return false;
}


const addTask = (e) => {
    let newValue = document.createElement("li");
    if (e.key === 'Enter' || e.keyCode === 13){
     newValue.innerHTML = `<span><i class="fa fa-trash"></i></span> ${e.target.value}`;
     list.appendChild(newValue);
     e.target.value = '';
     return true;
    }
  return false;
}

list.addEventListener("click", deleteTask);
input.addEventListener("keyup", addTask);

  
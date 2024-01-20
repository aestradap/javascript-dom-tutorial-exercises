let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
 let newLi = document.createElement('li');
 newLi.innerHTML = 'Forth Element';
 document.querySelector('#myList').appendChild(newLi);
});



const addButton = document.querySelector('.add');
let todoList = document.querySelector('.to-do_list');
let options = document.querySelector('.options');


function removeElements(rem) {
    let optionElements = document.querySelectorAll('.options');
    if (optionElements.length > 1) {
        rem.remove();
   }
}

addButton.addEventListener('click', () => {
    let newElement = document.createElement('div');
    newElement.innerHTML = options.innerHTML;
    newElement.classList.add('options');
    todoList.append(newElement);
    let deleteButton = newElement.querySelector('.pushbutton_delete');
    deleteButton.addEventListener('click', () => {
        removeElements(newElement);
    });


});




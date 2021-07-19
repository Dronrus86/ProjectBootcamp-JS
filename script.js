
const addButton = document.querySelector('.add');
const todoList = document.querySelector('.to-do_list');
const options = document.querySelector('.options');
const removeButton = document.querySelector('.pushbutton_delete');





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
    let removeButton = newElement.querySelector('.pushbutton_delete');
    removeButton.addEventListener('click', () => {
        removeElements(newElement);
    });

});

removeButton.addEventListener('click', () => {
    removeElements(options);
});


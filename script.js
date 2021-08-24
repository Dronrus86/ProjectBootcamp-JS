
const addButton = document.querySelector('.add');
const todoList = document.querySelector('.to-do_list');
const options = document.querySelector('.options');
const removeButton = document.querySelector('.pushbutton_delete');
const arrow = document.querySelector('.sort_arrow');
const triangle = document.querySelector('.sorting_triangle');
let sortButton = document.querySelector('.sorting');
let form = document.querySelector('.form');




function removeElements(rem) {
    let optionElements = document.querySelectorAll('.options');
    if (optionElements.length > 1) {
        rem.remove();
   }
}



    form.addEventListener('submit', (event) => {
        event.preventDefault();
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


/*Сортировка */


sortButton.addEventListener('click', () => {
    let arrTasks = [];
    let inputs = document.querySelectorAll('.list_points');

    for (let i = 0; i < inputs.length; i++) {
        arrTasks.push(inputs[i].value);
        if (!arrow.style.flexDirection || arrow.style.flexDirection === 'column') {
            arrow.style.flexDirection = 'column-reverse';
            triangle.style.transform = 'rotate(-180deg)';
            triangle.style.marginBottom = '-2px';
            triangle.style.marginLeft = '1px';

        arrTasks.sort((a, b) => {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });

      for (let j = 0; j < arrTasks.length; j++) {
        inputs[j].value = arrTasks[j];
    }
    
} else {
    arrow.style.flexDirection = 'column';
    triangle.style.transform = 'none';
    triangle.style.marginBottom = '0';
    triangle.style.marginLeft = '0';
    
    arrTasks.sort((a, b) => {
        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }
        return 0;
    });
    for (let j = 0; j < arrTasks.length; j++) {
        inputs[j].value = arrTasks[j];
    }
}

}
});





   






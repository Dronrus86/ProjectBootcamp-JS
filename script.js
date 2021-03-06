
const sortingButton = document.getElementById('sorting');
const form = document.getElementById('form');
const plusButton = document.querySelector('.plus');
const taskRow = document.getElementById('newTask');
const taskListElement = document.querySelector('.task');
const ulTaskListElement = document.querySelector('.task ul');

form.addEventListener('submit', clickAddButton);
function clickAddButton(event) {
    event.preventDefault();
    const newLi = document.createElement('li');
    const liSpan = document.createElement('span');
    newLi.classList.add('liItem');
    liSpan.classList.add('spanItem');
    liSpan.innerText=taskRow.value;
    ulTaskListElement.append(newLi);
    newLi.append(liSpan);
    newLi.draggable=true;
    liSpan.contentEditable=true;
    
    const newButton = document.createElement('span')
    newButton.innerHTML='&times;';
    newButton.classList.add('liButton');
    newLi.append(newButton);
    taskRow.value='';
    taskListElement.style.display='block';
    deleteButton(newButton);
}


function deleteButton(button) {
    button.addEventListener('click', (event) => {
        const liElements = document.querySelectorAll('.liItem');
        if (liElements.length === 1) {
            button.parentElement.remove();
            event.stopPropagation();
            taskListElement.style.display='none';
        } else {
            button.parentElement.remove();
            event.stopPropagation();
        }
    });
}

// Сортировка

let flag = 0;
sortingButton.addEventListener('click', function () {
if (flag === 0) {
    liSortingButton(ulTaskListElement);
    flag = 1;
  } else {
    liSortingButtonBack(ulTaskListElement); 
    flag = 0;
  }
 })

function liSortingButton() {
    const liElements = document.querySelectorAll('.liItem');
    if (liElements.length >= 2) {
    Array.from(ulTaskListElement.getElementsByTagName('li'))
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach(li => ulTaskListElement.appendChild(li));
      sortingButton.style.background="url('img/Group\ 90.svg') no-repeat";
    sortingButton.onmouseover = () => {
        sortingButton.style.background="url('img/Group\ 91.svg') no-repeat";
    }
    sortingButton.onmouseout = () => {
        sortingButton.style.background="url('img/Group\ 90.svg') no-repeat";
    }}
}
  function liSortingButtonBack() {
    const liElements = document.querySelectorAll('.liItem');
    if (liElements.length >= 2) {
    Array.from(ulTaskListElement.getElementsByTagName('li'))
      .sort((a, b) => b.textContent.localeCompare(a.textContent))
      .forEach(li => ulTaskListElement.appendChild(li));
      sortingButton.style.background="url('img/Group\ 74.svg') no-repeat";
       sortingButton.onmouseover = () => {
        sortingButton.style.background="url('img/Group\ 73.svg') no-repeat";
    }
    sortingButton.onmouseout = () => {
        sortingButton.style.background="url('img/Group\ 74.svg') no-repeat";
    }}
    
}
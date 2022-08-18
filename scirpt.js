var MainTodoContainer = document.getElementById('todos');
var Enput =  document.querySelector('.todo_input');
var addingButton = document.querySelector('.add-item');
var deleteAllBtn = document.querySelector('.deleteBtn');



addingButton.addEventListener('click',function(e){

     if(Enput.ariaValueMax.trim())
     {
        var ulTag = document.createElement('ul');
        ulTag.classList.add('todo-list-container');


        var todoList = document.createElement('div');
        todoList.classList.add('todo-list');

        var liTag = document.createElement('li');
        liTag.innerHTML = input.value;

        var buttonDiv  = document.createElement('div');
        buttonDiv.classList.add('button');

        var completeButton = document.createElement('button');
        completeButton.classList.add('completed');
        completeButton.innerHTML = ' <i class = "fa fa-solid fa-check"></i>'

    }

})

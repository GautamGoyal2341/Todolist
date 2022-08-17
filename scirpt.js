var MainTodoContainer = document.getElementById('todos');
var Enput =  document.querySelector('.todo_input');
var addingButton = document.querySelector('.add-item');
var deleteAllBtn = document.querySelector('.deleteBtn');



addingButton.addEventListener('click',function(e){

     if(Enput.value.trim())
     {
        var ulTag = document.createElement('ul');
        ulTag.classList.add('todo-list-container');


        var todoList = document.createElement('div');
        todoList.classList.add('todo-list');

        var liTag = document.createElement('li');
        liTag.innerHTML = Enput.value;
        liTag.classList.add('todo-item');

        var buttonDiv  = document.createElement('div');
        buttonDiv.classList.add('button');

        var completeButton = document.createElement('button');
        completeButton.classList.add('completed');
        completeButton.innerHTML = ' <i class = "fa fa-solid fa-check"></i>'

        
        var editButton = document.createElement('button');
        completeButton.classList.add('editBtn');
        completeButton.innerHTML = '    <i class = "fa fa-plus fa-add-item"></i>'

        var trashButton = document.createElement('button');
        completeButton.classList.add('trash');
        completeButton.innerHTML = '<i class="fa fa-solid fa-edit" ></i>'


        ulTag.appendChild(todoList);
        todoList.appendChild(liTag);
        todoList.appendChild(buttonDiv);
        buttonDiv.appendChild(completeButton);
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(trashButton);
        console.log(ulTag);



    }

})

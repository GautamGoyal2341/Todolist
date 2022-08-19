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
        editButton.classList.add('editBtn');
        editButton.innerHTML = '    <i class = "fa fa-solid fa-edit"></i>'
        editButton.onclick = function()
        {
            editWorking(liTag);
        }

        var trashButton = document.createElement('button');
        trashButton.classList.add('trash');
        trashButton.innerHTML = '<i class="fa fa-solid fa-trash" ></i>'


        ulTag.appendChild(todoList);
        todoList.appendChild(liTag);
        todoList.appendChild(buttonDiv);
        buttonDiv.appendChild(completeButton);
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(trashButton);
        console.log(ulTag);

        MainTodoContainer.appendChild(ulTag);

       todoList.addEventListener('click',function(e){
            var items = e.target;
            if(items.classList[0] === 'completed')
            {
                var paren = items.parentElement;
                var pparen = paren.parentElement;
                pparen.classList.add('line-tho')
            }else if(items.classList[0] === 'trash')
            {
                var paren = items.parentElement;
                var pparen = paren.parentElement;
                var ppparen = pparen.parentElement;
                ppparen.classList.add('fall')
                // ppparen.remove();  
                ppparen.addEventListener('transitionend',function(){
                    ppparen.remove();
                }) 
            }
       })

 
        Enput.value = '';

    }else if(Enput.value === '')
    {
        alert('please enter the msg')
    }

})


function editWorking(e)
{
    var editValue = prompt('edit the Selected item' , e.firstChild.nodeValue );
    e.firstChild.nodeValue = editValue


}
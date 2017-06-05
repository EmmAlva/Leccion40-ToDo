'use strict';

const Todo = () =>{
	const parent = $('<div class="white-card"></div>');
	const input = $('<input id ="input-item" type ="text" placeholder ="Ingresa la tarea">');
	const todoTitle = $('<p>To Do Items:</p>');
	const list = $('<div class = "list"></div>');
	const hr = $('<hr>');
	const completedTitle = $('<p>Completed Items</p>');
	const completedList = $('<div class ="completed"></div>');

	parent.append(input);
	parent.append(todoTitle);
	parent.append(list);
	parent.append(hr);
	parent.append(completedTitle);
	parent.append(completedList);

const TodoItems = (data,update) =>{ //Función auxiliar para crear elementos todo y manejar eventos
	const todo = $('<div class="todo">');
	const checkbox = $('<input type="checkbox" class="check-box unchecked checked" >');
	const span = $('<span>'+data.text+'</span>');
	const remove = $('<button>Remove</button>');

	todo.append(checkbox);
	todo.append(span);
	todo.append(remove);

	checkbox.on('change', (e)=>{
		data.completed = !data.completed;
		update();
	});

	remove.on('click',(e)=>{
		const idx = state.todos.map( x => x.text).indexOf(data.text);
		state.todos.splice(idx,1);
		update();
	});

	return todo;

}

const reRender = (todoList, completedList) =>{
	todoList.empty();
	completedList.empty();
	state.todos.forEach(todo =>{
		if(!todo.completed){
			todoList.append(TodoItems(todo,_ =>{
				reRender(todoList,completedList);
			}));
		}else{
			completedList.append(TodoItems(todo,_=>{
				reRender(todoList,completedList);
			}));
		}
	});
}


input.on('keypress',e =>{
	if(e.which === 13){
		if(input.val() != ""){
			state.todos.push({
				text: input.val(),
				completed: false
			});
			input.val('');
			reRender(list,completedList); //reRender, función auxiliar, permite repintar el html
		}
	}
});

	return parent;
}


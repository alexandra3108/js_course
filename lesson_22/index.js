'use strict'
const input =  document.getElementsByClassName('new-todo')[0];
const main = document.getElementsByClassName('main')[0];
const todoList = document.getElementsByClassName('todo-list')[0];
const clearButton = document.getElementsByClassName('clear-complete')[0];
const itemTemplate = document.getElementsByClassName('hidden')[0];
const filters = document.getElementsByClassName('filters')[0];
const todoCount = document.getElementsByClassName('todo-count')[0];

let count = 0;

function postData(data) {
	fetch('https://api.jsonbin.io/b', {
		method:'POST',
		headers: {
			'Contant-Type': 'application/json',
			'secret-key':'',
			private:'true',
			name:'todo',
		},
		body: JSON.stringify(data),
	});
}

function putData(id, data) {
	return fetch(`https://api.jsonbin.io/b/${id}`, {
		method:'PUT',
		headers: {
			'Contant-Type': 'application/json',
			'secret-key': SECRET_KEY,
			private:'true',
			name:'todo',
		},
		body: JSON.stringify(data),
	});
}

function getData(id, data) {
	return fetch(`https://api.jsonbin.io/b/${id}`, {
		method:'GET',
		headers: {
			'secret-key': SECRET_KEY,
		},
	}).then(res => res.json ());
}

function updateCount(change) {
	count += change;
	todoCount.innerText=`${count} item${count === 1 ? '' : 's'}left`;
}
 
input.addEventListener('keydown', (e) => {
	if (e.keyCode === 13 && e.target.value.trim().length) {
		main.style.display = 'block';
	
		const element = itemTemplate.cloneNode(true);
		element.children[0].chidren[1].innerText = e.target.value;
		element.className = "";
         const button = element.getElementsByClassName('destroy')[0];
		 const checkbox = element.getElementsByClassName('toggle')[0]
		button.addEventListener('click', () => {
			todoList.removeChild(element);
			if(!element.classList.contains('completed'))
			updateCount(-1);
		});
		checkbox.addEventListener('change', () => {
			if (checkbox.checked){
				element.classList.add('completed');
				updateCount(-1);
			}else{
						element.classList.remove('complete');
						updateCount(+1);
					}
			});
		todoList.append(element);
		e.target.value = "";
		updateCount(+1);
	}
});
 
clearButton.addEventListener('click', () =>{
	for (let i=0; i < todoList.children.length; i =+ 1){
		if (todoList.children[i].classList.contains('complete')){
			todolist.removeChild(todoList.children[i]);
		}
	}

});
//работающие фильтри
/*function filterList(hash) {
	for(let i = 0; i< todoLIst.children.length; i =+1){
		if(hash === '#/'){
			todoLIst.children[i].style.display = 'block';	
		} else if {hash === '#/active'){
			if(todoLIst.children[i].classList.contains('completed')){
			todoLIst.children[implements].style.display = 'none';
		}else {
			todoLIst.children[i].style.display = 'block';
		}
		}else{
			if(todoLIst.children[i].classList.contains('completed')){
				todoLIst.children[i].style.display = 'block';
			}else{
				todoLIst.children[i].style.display = 'none';
			}
		}
	}
};*/
;
const map = {
	'#/active':{
		'true':'none',
		'false': 'block',
	},
	'#/completed':{
		'true':'block',
		'false': 'none',
	},
	'#/':{
		'true':'block',
		'false': 'block',
	},	
}
function filterList(hash) {
	for(let i = 0; i< todoLIst.children.length; i =+1){
		const isCompleted = todoLIst.children[i].classList.contains('completed');
		todoLIst.children[i].style.display = map.isCompleted;
	};

window.addEventListener('popstate', () => {
	for(let i=0; i < filters.chidren.length;  i =+1){
		const link = filters.children[i].children[0];
		if(link.hash = location.hash){
			link.classList.add('selected');
		}else{
			link.classList.remove('selected');
		}
	}
	filterList(location.hash);
});
//classEdit - редактировать
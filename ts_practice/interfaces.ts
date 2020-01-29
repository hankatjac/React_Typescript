// function showTodo(todo: {title:string, text: string}){
//     console.log(todo.title+': ' + todo.text);
// }

// let myTodo = {title:"Trash", text: 'Take out trash'};
// showTodo(myTodo);


interface todo {
    title: string;
    text: string;
}

function showTodo(todo: todo){
    console.log(todo.title+': ' + todo.text);
}

let myTodo = {title:"Milk", text: 'Buy milk'};
showTodo(myTodo);
import React, { useState } from "react";
// import { TodoListItem } from './TodoListItem';
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import { PokeMonSearch } from "./PokemonSearch";


const initialTodos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "write app", complete: false }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <React.Fragment>
      {/* <TodoListItem todo={todos[0]} toggleTodo = {toggleTodo}/>
      <TodoListItem todo={todos[1]} toggleTodo = {toggleTodo}/> */}

      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
      <PokeMonSearch name="John Doe" numberofPokeMons={5} />
    </React.Fragment>
  );
};

export default App;

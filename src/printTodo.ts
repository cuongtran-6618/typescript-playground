interface Todo {
  id: string;
  description: string;
  status: boolean;
  [propName: string]: any; // Todo can has other property with type as any
}

function printTodo(todo: Todo): void {
  console.log(`firstTodo with id: ${todo.id}, and description: ${todo.description}.`);
}

export default printTodo;
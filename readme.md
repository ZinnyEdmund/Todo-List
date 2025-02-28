# Todo List App (TypeScript)
---

## Introduction

This is a simple **Todo List application** built with **TypeScript**. It allows users to **add, complete, remove, list, update and filter** tasks efficiently.


## Features

- ✔ **Add a Todo**: Creates a new task with a due date.
- ✔ **Complete a Todo**: Mark a task as completed.
- ✔ **Remove a Todo**: Delete a task from the list.
- ✔ **List Todos**: Display all tasks.
- ✔ **Filter Todos**: Show only completed or pending.
- ✔ **Update a Todo**: Modify the task description.
- ✔ **Clear Completed Todos**: Remove all finished task.


## Technologies Used

- TypeScript
- Node.js(for execution)


## Getting Started

1. Clone the Repository
```git
    git clone https://github.com/ZinnyEdmund/Todo-List-ts.git 
    cd Todo-List-ts
```

2. Install Dependencies
```sh
 npm install
```

3. Run the Application
```sh
    ts-node index.ts
```

## Code Structure
### TodoItem Interface

Defines the structure of a todo item:
```ts
    interface TodoItem{
        id: number;
        task: string;
        completed: boolean;
        dueDate: Date;
    }
```
### TodoList Class

Manages the todo list and its operation
```ts
    class TodoList{
        private todos: TodoItem[] = [];
        private idCounter: number = 1;

        addTodo(task: string, dueDate: Date):
        void{
            const newTodo: TodoItem = {
                id: this.idCounter++,
                task,
                completed: false,
                dueDate,
            };
            this.todos.push(newTodo);
        }
    }   
```
## Future Enhancements

- 📌 Svae todos to a file/database
- 📌 Add a CLI interface
- 📌 Implementing a web UI

## Contributing

Feel free to fork this repository and submit pull requests!!
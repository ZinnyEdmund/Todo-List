//Defining the To-do interface
interface TodoItem{
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;
}

//Implementing the class
class TodoList{
    private todos: TodoItem[] = [];
    private idCounter: number = 1;

    //To add a new item
    addTodo(task: string, dueDate: Date):
     void{
        const newTodo: TodoItem = {
            id: this.idCounter++,
            task,
            completed: false,
            dueDate,
        };
        this.todos.push(newTodo);
        console.log(`Added: "${task}" (Due: ${dueDate.toDateString()})`);
    }

    //Marks a todo list when completed
    completedTodo(id: number): void{
        const todo = this.todos.find((t) => t.id === id);
        if (todo){
            todo.completed = true;
            console.log(`Completed: "${todo.task}"`);
        }
        else{
            console.log(`Todo with ID ${id} not found`)
        }
    }
    //Remove a todo item
    removeTodo(id: number): void{
        const index = this.todos.findIndex((t) => t.id === id);
        if (index !== -1){
            console.log(`Remove: "${this.todos[index].task}"`);
            this.todos.splice(index, 1);
        }
        else{
            console.log(`Todo with ID ${id} not found.`);
        }
    }

    //List all  the todo items
    listTodos(): void{
        if (this.todos.length === 0){
            console.log("No todos available!");
            return;
        }
        console.log("Todo List:");
        this.todos.forEach((t) => {
            console.log(`${t.id}. ${t.task} -${t.completed ? "Completed" : "Pending"} (Due: ${t.dueDate.toDateString()})`);
        });
    }

    //Filtering tools by their completed status
    filterTodos(completed: boolean): void{
        const filtered = this.todos.filter((t) => t.completed === completed);
        if (filtered.length === 0){
            console.log(completed ? "No completed tasks." : "No pending tasks.");
            return;
        }
        console.log(completed ? "Completed Tasks:" : "Pending Tasks:");
        filtered.forEach((t) => {
            console.log(`${t.id}. ${t.task} (Due: ${t.dueDate.toDateString()})`);
        });
    }

    //Update a todo item's task description
    updateTodo(id: number, newTask: string): void{
        const todo = this.todos.find((t) => t.id === id);
        if (todo){
            console.log(`Update: "${todo.task}" 'n "${newTask}"`);
            todo.task = newTask;
        }
        else{
            console.log(`Todo with ID ${id} not found!`);
        }
    }

    //Clear all the todod items
    clearCompleted(): void{
        this.todos = this.todos.filter((t) => ! t.completed);
        console.log("Cleared all completed tasks.");
    }
}

const todoList = new TodoList();
todoList.addTodo("Learn TypeScript", new Date("2025-02-20"));
todoList.addTodo("Build a project using TypeScript", new Date("2025-03-25"));
todoList.listTodos();
todoList.completedTodo(1);
todoList.filterTodos(true);
todoList.updateTodo(2, "Build a To-do list app");
todoList.listTodos();
todoList.clearCompleted();
todoList.listTodos();
// this is to let the html load first - delays js script running
// var todos = ["Buy New Turtle"];
// window.setTimeout(function () {
// put all the rest of your JS code from the lecture here
// }, 500);

// To Do List app

var todos = ["Buy dart board", "New musical spoons", "6 turtle doves"];

window.setTimeout(function () {
    // list slows the loading of the js script so the html can load

    var input = prompt("What would you like to do?");

    while (input !== "quit") {
        if (input === "list") {
            listTodos();
        } else if (input === "new") {
            addTodo();
        } else if (input === "quit") {
            console.log(todos);
        } else if (input === "remove") {
            var index = prompt("Enter the index (number) of todo to delete");
            todos.splice(index, 1);
            console.log("Removed " + index + " from your list");
            listTodos();
        }
        input = prompt("What would you like to do?");
    }
    console.log("Gooooodbye, quitter");

    function listTodos() {
        console.log("**************");
        todos.forEach(function (todo, i) {
            console.log(i + ": " + todo);
        });
        console.log("**************");
    }

    function addTodo() {
        var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log("Added " + newTodo + " to your list");
    }

}, 500);
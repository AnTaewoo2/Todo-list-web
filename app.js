(function () {
  function TodoApp() {
    const [tasks, setTasks] = React.useState([]);
    const [taskText, setTaskText] = React.useState("");

    function handleSubmit(event) {
      event.preventDefault();
      const trimmedText = taskText.trim();

      if (!trimmedText) {
        return;
      }

      setTasks(function (currentTasks) {
        return currentTasks.concat({
          id: Date.now() + Math.random(),
          text: trimmedText,
          completed: false
        });
      });
      setTaskText("");
    }

    function toggleTask(taskId) {
      setTasks(function (currentTasks) {
        return currentTasks.map(function (task) {
          if (task.id === taskId) {
            return Object.assign({}, task, { completed: !task.completed });
          }
          return task;
        });
      });
    }

    function removeTask(taskId) {
      setTasks(function (currentTasks) {
        return currentTasks.filter(function (task) {
          return task.id !== taskId;
        });
      });
    }

    return React.createElement(
      "main",
      { className: "todo-app" },
      React.createElement("h1", null, "To-do List"),
      React.createElement(
        "form",
        { onSubmit: handleSubmit },
        React.createElement("label", { htmlFor: "task-input" }, "New task"),
        React.createElement("input", {
          id: "task-input",
          value: taskText,
          onChange: function (event) {
            setTaskText(event.target.value);
          },
          placeholder: "Enter a task",
          type: "text"
        }),
        React.createElement("button", { type: "submit" }, "Add task")
      ),
      React.createElement(
        "ul",
        { "aria-label": "Tasks" },
        tasks.map(function (task) {
          return React.createElement(
            "li",
            {
              key: task.id,
              style: {
                textDecoration: task.completed ? "line-through" : "none",
                opacity: task.completed ? 0.65 : 1
              }
            },
            React.createElement("span", null, task.text),
            React.createElement(
              "button",
              {
                type: "button",
                onClick: function () {
                  toggleTask(task.id);
                },
                "aria-pressed": task.completed
              },
              "Complete"
            ),
            React.createElement(
              "button",
              {
                type: "button",
                onClick: function () {
                  removeTask(task.id);
                }
              },
              "Remove"
            )
          );
        })
      )
    );
  }

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(React.createElement(TodoApp));
})();

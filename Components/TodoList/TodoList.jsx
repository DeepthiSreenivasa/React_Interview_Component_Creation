import { useState } from "react";

const TodoList = () => {
  const todos = [
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Prepare for Flipkart",
      completed: false,
    },
  ];
  const [todoList, setTodoList] = useState(todos);
  const [tasksCompleted, setTasksCompleted] = useState([]);

  const getStatusOfTasks = (event, index) => {
    console.log("Event::", event.target.checked);

    let updatedList = todoList.map((item, i) => {
      if (i == index) {
        return { ...item, completed: !item.completed };
      }

      return item;
    });

    console.log("UpdatedList::", updatedList);

    const completedTasks = updatedList.filter((item) => item.completed);

    setTodoList((prev) => (prev = [...updatedList]));
    setTasksCompleted(completedTasks);
  };

  return (
    <>
      <h1>This is TodoList</h1>
      {todoList.map((item, index) => (
        <>
          <span key={item.id}>
            <input
              type="checkbox"
              onChange={(event) => {
                getStatusOfTasks(event, index);
              }}
            />
          </span>
          <span>
            <li>{item.title}</li>
          </span>
        </>
      ))}
      <h1>List of Tasks you have comepleted</h1>
      {tasksCompleted?.map((item) => {
        return (
          <>
            <div>{item.title}</div>
          </>
        );
      })}
    </>
  );
};

export default TodoList;

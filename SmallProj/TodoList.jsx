import { useState, useRef } from "react";

const TodoList = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      task: "Clean Shelf",
      status: "Mark In Progress",
      statusColor: "Yellow",
    },
    {
      id: 2,
      task: "Read a Book",
      status: "Mark As Done",
      statusColor: "Green",
    },
    {
      id: 3,
      task: "Go Cycling",
      status: "To Start",
      statusColor: "Blue",
    },
  ]);

  const inputStr = useRef();

  function getTodoItem(event) {
    inputStr.current = event.target.value;
  }

  function addItemToList(event) {
    let inputItem = {
      id: 1,
      task: inputStr.current,
      status: "To Start",
      statusColor: "Blue",
    };

    let newTodoList = [...todoList, inputItem];
    setTodoList(newTodoList);
  }

  function getStatusOfTask(event, item) {
    switch (event.target.value) {
      case "To Start":
        setTodoList((prev) =>
          prev.map((todo) =>
            todo.id === item.id
              ? { ...todo, statusColor: "Blue", status: "To Start" }
              : todo
          )
        );
        break;
      case "Mark In Progress": {
        setTodoList((prev) =>
          prev.map((todo) =>
            todo.id === item.id
              ? { ...todo, statusColor: "Yellow", status: "Mark In Progress" }
              : todo
          )
        );
        break;
      }
      case "Mark As Done":
        setTodoList((prev) =>
          prev.map((todo) =>
            todo.id === item.id
              ? { ...todo, statusColor: "Green", status: "Mark As Done" }
              : todo
          )
        );
        break;
    }
  }

  return (
    <>
      <input type="text" onChange={($event) => getTodoItem($event)} />
      <button onClick={addItemToList}>+</button>
      {todoList.map((item, index) => {
        return (
          <>
            <div>
              <span style={{ color: item.statusColor }}>
                <h4>{item.task}</h4>
              </span>
              <span>
                <label>To Start</label>
                <input
                  type="radio"
                  name={item.id}
                  value="To Start"
                  checked={item.status === "To Start"}
                  onChange={($event) => getStatusOfTask($event, item)}
                />
              </span>
              <span>
                <label>Mark In Progress</label>
                <input
                  type="radio"
                  name={item.id}
                  value="Mark In Progress"
                  checked={item.status === "Mark In Progress"}
                  onChange={($event) => getStatusOfTask($event, item)}
                />
              </span>
              <span>
                <label>Mark As Done</label>
                <input
                  type="radio"
                  name={item.id}
                  value="Mark As Done"
                  checked={item.status === "Mark As Done"}
                  onChange={($event) => getStatusOfTask($event, item)}
                />
              </span>
            </div>
          </>
        );
      })}
    </>
  );
};

export default TodoList;

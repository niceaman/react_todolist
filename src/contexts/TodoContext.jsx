import { func } from "prop-types";
import { useState, createContext, useEffect } from "react";
import * as TodoAPIServices from "../services/todoServices";
import { getSevenDayRange } from "../utils/DateUtils";

export const TodoContext = createContext();

// Provider : wrapper Component
function TodoContextProvider(props) {
  const [todos, setTodos] = useState([]);
  const [todosFilter, setTodosFilter] = useState([]);

  async function fetchAllTodo() {
    try {
      // let response = await axios({
      //     method: 'get',
      //     url: 'http://localhost:8080/todos',
      // });

      // #1 : Sync with External Service
      const response = await TodoAPIServices.getAllTodo();

      // #2 : Sync with Internal State
      setTodos(response.data.todos);
      setTodosFilter(response.data.todos);
    } catch (error) {
      // #3 Error handler
      console.log(error.response.status);
    }
  }
  useEffect(() => {
    fetchAllTodo();
    // FN-RETURN(CleanUp Effect) : Run BEFORE RERENDER,BEFORE UNMOUNT
  }, []);

  const addTodo = async (task) => {
    try {
      // #1 Sync With External State/Service : Database
      const now = new Date().toISOString().slice(0, 10);
      const newTodoObj = { task: task, status: false, date: now };
      const response = await TodoAPIServices.createTodo(newTodoObj);
      const createdTodoObj = response.data.todo;

      // #2 Sync with Internal State : UI State
      const newTodoLists = [createdTodoObj, ...todos];
      // NOTE : not concern about time yet! todo for today can appear in next 7 days lists
      setTodos(newTodoLists);
      setTodosFilter(newTodoLists);
    } catch (error) {
      // #3 Error Handler eg. modal Error, Sweat Alert
      console.log(error.response.data);
    }
  };

  const editTodo = async (todoId, updateObj) => {
    // #1 Sync With External State/Service : Database
    // #2 Sync with Internal State : UI State
    // #3 Error Handler eg. modal Error, Sweat Alert

    try {
      // #1 Sync With External State/Service : Database
      // const response = await axios.put(`http://localhost:8080/todos/${todoId}`, updateObj);
      const response = await TodoAPIServices.updateTodo(updateObj);
      const updatedTodoObj = response.data.todo;

      // #2  Sync with Internal State : UI State
      const foundedIndex = todos.findIndex((todo) => todo.id === todoId);
      if (foundedIndex !== -1) {
        const newTodoLists = [...todos];
        // newTodoLists[foundedIndex] = { ...newTodoLists[foundedIndex], ...updatedTodoObj };
        newTodoLists[foundedIndex] = Object.assign(
          {},
          newTodoLists[foundedIndex],
          updatedTodoObj
        );
        setTodos(newTodoLists);
        setTodosFilter(newTodoLists);
      }
    } catch (error) {
      // #3 Error Handler eg. modal Error, Sweat Alert
      console.log(error.response.data);
    }
  };

  const deleteTodo = async (todoId) => {
    // #1 Sync With External State/Service : Database
    // #2 Sync with Internal State : UI State
    // #3 Error Handler eg. modal Error, Sweat Alert
    try {
      // #1 Sync With External State/Service : Database
      // await axios.delete(`http://localhost:8080/todos/${todoId}`)
      await TodoAPIServices.deleteTodo(todoId);

      // #2 Sync with Internal State : UI State
      const newTodoLists = todos.filter((todo) => todo.id !== todoId);
      setTodos(newTodoLists);
      setTodosFilter(newTodoLists);
    } catch (error) {
      // #3 Error Handler eg. modal Error, Sweat Alert
      console.log(error.response.data);
    }
  };

  const selectList = (selectedIndex) => {
    const [today, nextSevenDay] = getSevenDayRange();
    if (selectedIndex == 0) {
      setTodosFilter(todos);
    } else if (selectedIndex == 1) {
      const newTodo = todos.filter((todo) => todo.date === today);
      setTodosFilter(newTodo);
    } else if (selectedIndex == 2) {
      const newTodo = todos.filter(
        (todo) => todo.date >= today && todo.date <= nextSevenDay
      );
      setTodosFilter(newTodo);
    }
  };

  // SEARCH TODO
  const searchTodo = (searchValue) => {
    // ใช้ todosFilter เพื่อหาจาก tab ปัจจุบัน
    const newTodo = todos.filter((todo) =>
      todo.task.toLowerCase().includes(searchValue.toLowerCase())
    );
    // setTodos(newTodo);
    setTodosFilter(newTodo);
  };

  const shareObj = {
    magic: 42,
    todos,
    todosFilter,
    addTodo,
    editTodo,
    deleteTodo,
    selectList,
    searchTodo,
  };

  return (
    <TodoContext.Provider value={shareObj}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;

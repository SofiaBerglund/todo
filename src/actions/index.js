import todos from "../apis/todos";
import { CREATE_TODO, FETCH_TODOS, EDIT_TODO, DELETE_TODO } from "./types";

export const createTodo = (formValues, timeStamp) => async (dispatch) => {
  const response = await todos.post("/todos", {
    text: formValues,
    isCompleted: false,
    timeStamp,
  });

  dispatch({ type: CREATE_TODO, payload: response.data });
};

export const editTodo = (id, value) => async (dispatch) => {
  const response = await todos.patch(`/todos/${id}`, value);

  dispatch({ type: EDIT_TODO, payload: response.data });
};

export const fetchTodos = () => async (dispatch) => {
  const response = await todos.get("/todos");

  dispatch({ type: FETCH_TODOS, payload: response.data });
};

export const deleteTodo = (id) => async (dispatch) => {
  await todos.delete(`/todos/${id}`);

  dispatch({ type: DELETE_TODO, payload: id });
};

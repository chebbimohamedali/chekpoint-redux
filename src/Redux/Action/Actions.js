// export const addTodo=(todo )=>(dispatch, getState)=>{
//   const {todo: {todos}}= getState()
//    const todoexists = todos.find(item=> item.todo === todo)
//    if(!todoexists && todo!==''){
//      dispatch({
//          type:'ADDTODO',
//          payload:[ ...todos, {id: todo, todo,  fulfilled: false}]
//      })
//    }
//  }
//  export const doneTodo=(todo)=>(dispatch, getState)=> {
//    const {todo: {todos}} = getState()
//    dispatch({
//      type:'DONETODO',
//      payload: todos.filter((item)=> item.id !== todo.id )
//    })
//  }
import { ADDTODO, DELETETODO, DONETODO, EDITTODO } from "../Store/Type";

export const addTodo = (newTodo) => {
  return {
    type: ADDTODO,
    payload: newTodo,
  };
};
export const deleteTodo = (id) => {
  return {
    type: DELETETODO,
    payload: id,
  };
};

export const doneTodo = (id) => {
  return {
    type: DONETODO,
    payload: id,
  };
};
export const editTodo = (id, newText) => {
  return {
    type: EDITTODO,
    payload: { id, newText },
  };
};
import {CHANGE_POST, CREATE_POST, DELETE_POST} from "../types";

const initialState = {
  posts: [
    {
      id: 1,
      key: '1',
      title: 'Заголовок записи',
      message: 'Сообщение'
    },
    {
      id: 2,
      key: '2',
      title: 'Очень длинный заголовок записи',
      message: 'Очень длинное сообщение'
    },
  ]
}

export function postsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST: {
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    }
    case CHANGE_POST: {
      return {
        ...state,
        //posts: [...state.posts, action.payload]
        posts: state.posts.map(item => item.id !== action.payload.id ? item : action.payload)
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(item => item.id !== action.payload)
      }
    }
    default: return state;
  }
}
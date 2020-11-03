import {DELETE_POST} from "../types";

export function deletePost(id) {
  return {
    type: DELETE_POST,
    payload: id
  }
}
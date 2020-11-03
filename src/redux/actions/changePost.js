import {CHANGE_POST} from "../types";

export function changePost(post) {
  return {
    type: CHANGE_POST,
    payload: post,
  }
}
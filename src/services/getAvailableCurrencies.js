import http from "./https.js";

export function serviceGetTodoList() {
    return http.get(api.todoList, {})
}
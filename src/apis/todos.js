import axios from 'axios';

const todoDataUrl = 'http://localhost:3100/todos';

// axios.get()でGETリクエストを送信
// サーバー上のすべてのTODO(todos)を取得するgetAllTodoData関数を宣言
export const getAllTodoData = async () => {
  // 戻される値はすべてresponseに保存される
  const response = await axios.get(todoDataUrl);
  // 通信後、response.dataでレスポンスデータを返す
  return response.data;
};

// axios.post()で新規TODOを追加する
// TODOを追加するaddTodoData関数を宣言

export const addTodoData = async (todo) => {
  // 第2引数に送信したいデータを指定してPOST送信
  // サーバーに転送することで新規のデータを追加
  const response = await axios.post(todoDataUrl, todo);
  // 通信後、response.dataでレスポンスデータを返す
  return response.data;
};

// axios.delete()で一致したidのTODOを削除する
// TODOを削除するdeleteTodoDataを宣言

export const deleteTodoData = async (id) => {
  await axios.delete(`${todoDataUrl}/${id}`);
  // 通信後、削除したTODOのidを返す
  return id;
};

// axios.put()で一致したidのTODOを更新する
// TODOを更新するupdateTodoDataを宣言

export const updateTodoData = async (id, todo) => {

    // 第2引数に更新したいデータを渡す
  const response = await axios.put(`${todoDataUrl}/${id}`, todo);
  // 通信後、response.dataでレスポンスデータを返す
  return response.data;
};

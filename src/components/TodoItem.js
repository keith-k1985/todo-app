// TodoItemコンポーネントを作成
//  親コンポーネントからtodo,toggleTodoListItemStatus,
//  deleteTodoListItemをpropsとして受け取る

export const TodoItem = ({
  todo,
  toggleTodoListItemStatus,
  deleteTodoListItem,
}) => {
  // TODOの完了/未完了を反転させるtoggleTodoListItemStatus関数を
  // 実行させるhandleToggleTodoListItemStatus関数を宣言
  const handleToggleTodoListItemStatus = () =>
    toggleTodoListItemStatus(todo.id, todo.done);

  // TODOを削除するdeleteTodoListItem関数を実行させる
  // handleDeleteTodoListItem関数を宣言
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

  return (
    <li>
      {/* TODOの内容 */}
      {todo.content}
      {/* TODOが完了の場合は「未完了リストへ」、未完了の場合は「完了リストへ」と表示するボタンを設置する */}
      {/* ボタンクリックでTODOの完了/未完了が反転 */}
      <button onClick={handleToggleTodoListItemStatus}>
        {todo.done ? '未完了リストへ' : '完了リストへ'}
      </button>
      {/* ボタンクリックでTODOを削除 */}
      <button onClick={handleDeleteTodoListItem}>削除</button>
    </li>
  );
};

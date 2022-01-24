//useRefを利用できるようにする(TODO入力フォームで利用)
import { useRef } from 'react';
import { useTodo } from '../hooks/useTodo';
import { TodoTitle } from './TodoTitle';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

// todoList/setTodoListを更新するための関数(初期値に空の配列をセット)
function App() {
  // useTodo()カスタムフックで作成したtodoList,addTodoListItem,
  // toggleTodoListItemStatus,deleteTodoListItemを利用できるようにする
  const {
    todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem,
  } = useTodo();

  // useRefでrefオブジェクトを作成(TODO入力フォームで利用)
  const inputEl = useRef(null);

  // TODO入力フォームで入力された文字列を新しいTODOに登録するための
  // handleAddTodoListItem関数を宣言
  const handleAddTodoListItem = () => {
    // 何も入力されていない場合にクリックしても何も返さない
    if (inputEl.current.value === '') return;
    // テキストエリアに入力されたテキストを新規TODOとして追加
    // 追加したらテキストエリアを空の文字列にする
    // 新規TODOを追加するaddTodoListItem関数を
    // 「+ TODOを追加」ボタンをクリックで実行
    addTodoListItem(inputEl.current.value);
    inputEl.current.value = '';
  };

  // 「TODOの状態が未完了」の要素をもつ新しい配列を作成
  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  // 「TODOの状態が完了」の要素をもつ新しい配列を作成
  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  return (
    <>
      {/* h1見出しタグをTodoTitleコンポーネントに */}
      {/* 見出しに表示させたいテキストをtitleに代入して子コンポーネントへpropsとして渡す */}
      <TodoTitle title='TODO進捗管理' as='h1' />
      {/* TODO追加フォーム TodoAddコンポーネントを作成 */}
      {/* useTodo()カスタムフックで作成したhandleAddTodoListItem関数を子コンポーネントへpropsで渡す */}
      {/* 「+ TODOを追加」ボタンをクリックでhandleAddTodoListItem関数を実行 */}
      <TodoAdd
        // ボタンに表示させるテキストをbuttonTextに代入してpropsで
        // 子コンポーネントに渡す
        buttonText='+ TODOに追加'
        inputEl={inputEl}
        handleAddTodoListItem={handleAddTodoListItem}
      />

      {/* TodoListコンポーネント */}
      {/* 未完了TODOリストをinCompletedListをtodoListに代入して子コンポーネントへpropsとして渡す */}
      {/* toggleTodoListItemStatus関数はtodoListItemの完了/未完了 */}
      {/* を反転させて更新する */}
      {/* deleteTodoListItem関数は各TODOに設置した「削除」ボタンを */}
      {/* クリックしたときに実行してTODOを削除する */}
      <TodoList
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        // TodoListコンポーネント内にTodoTitleコンポーネントをimport
        // しているので見出しテキストをpropsで子コンポーネントに渡す
        title='未完了TODOリスト'
        // 見出しのh2をasに代入してpropsで子コンポーネントに渡す
        as='h2'
      />
      <TodoList
        todoList={completedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        // TodoListコンポーネント内にTodoTitleコンポーネントをimport
        // しているので見出しテキストをpropsで子コンポーネントに渡す
        title='完了TODOリスト'
        // 見出しのh2をasに代入してpropsで子コンポーネントに渡す
        as='h2'
      />
    </>
  );
}

export default App;

import { useTodo } from '../hooks/useTodo';

// TodoTitleコンポーネントを作成
// 見出しタグがh1,h2mp場合の条件分岐を作成しておく
// 親コンポーネントからtitle,asをpropsとして受け取る

const TodoTitle = ({ title, as }) => {
  // asがh1ならタイトルはh1たぐ
  if (as === 'h1') return <h1>{title}</h1>;

  // asがh2ならタイトルはh1たぐ
  if (as === 'h2') return <h1>{title}</h1>;
  return <p>{title}</p>;
};

// TodoItemコンポーネントを作成
//  親コンポーネントからtodoをpropsとして受け取る

const TodoItem = ({ todo }) => {
  return (
    <li>
      {/* TODOの内容 */}
      {todo.content}
      {/* TODOが完了の場合は「未完了リストへ」、未完了の場合は「完了リストへ」と表示するボタンを設置する */}
      <button> {todo.done ? '未完了リストへ' : '完了リストへ'}</button>
      <button>削除</button>
    </li>
  );
};

// TodoListコンポーネントを作成
//  親コンポーネントからtodoListをpropsとして受け取る
const TodoList = ({ todoList }) => {
  return (
    <ul>
      {/* map()を利用してtodoListの要素を1つひとつ取り出す  */}
      {todoList.map((todo) => (
        // TodoItemに一意なIDをkey属性の値として付与
        // todoListから取り出したtodoを子コンポーネントへpropsとして渡す
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

// todoList/setTodoListを更新するための関数(初期値に空の配列をセット)
function App() {
  // useTodo()カスタムフックで作成したtodoListを利用できるようにする
  const { todoList } = useTodo();

  // console.logで取得したTODOリストを表示する
  console.log('TODOリスト', todoList);

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
      <textarea />
      <button>+ TODOを追加</button>
      {/* h2見出しタグをTodoTitleコンポーネントに */}
      {/* 見出しに表示させたいテキストをtitleに代入して子コンポーネントへpropsとして渡す */}
      <TodoTitle title='未完了TODOリスト' as='h2' />

      {/* TodoListコンポーネント */}
      {/* 未完了TODOリストをinCompletedListをtodoListに代入して子コンポーネントへpropsとして渡す */}
      <TodoList todoList={inCompletedList} />

      {/* h2見出しタグをTodoTitleコンポーネントに */}
      {/* 見出しに表示させたいテキストをtitleに代入して子コンポーネントへpropsとして渡す */}
      <TodoTitle title='完了TODOリスト' as='h2' />

      {/* TodoListコンポーネント */}
      {/* 未完了TODOリストをCompletedListをtodoListに代入して子コンポーネントへpropsとして渡す */}
      <TodoList todoList={completedList} />
    </>
  );
}

export default App;

// モックサーバーと通信のためimport
import axios from 'axios';
import { useEffect, useState } from 'react';

// ローカルサーバーに準備したモックサーバーのURL
const todoDataUrl = 'http://localhost:3100/todos';

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
  const [todoList, setTodoList] = useState([]);

  // useEffectを利用し、コンポーネントのマウント後に処理を実行
  // async/awaitで非同期処理

  useEffect(() => {
    const fetchData = async () => {
      // getは外部から情報を取得するメソッド
      // getの引数にURLを入れると、URLに対してGETリクエストを送信
      // リクエスト後に返ってくる値はresponseに保存される
      const response = await axios.get(todoDataUrl);

      // 戻された値はuseState()を利用して
      // todoListの現在の値としてセットする
      setTodoList(response.data);
    };
    fetchData();
  }, []);

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

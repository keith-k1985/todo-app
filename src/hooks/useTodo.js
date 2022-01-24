import { useEffect, useState } from 'react';
import { ulid } from 'ulid';
// todoDataオブジェクトをまとめてimport
import * as todoData from '../api/todos';

// todoListを更新するための関数、初期値は空の配列をセット
export const useTodo = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    // useEffectを利用してコンポーネントのマウント、アンマウント後に処理を実行
    // モックサーバーからTODOデータを取得するgetTodoDataを実行
    todoData.getAllTodoData().then((todo) => {
      // モックサーバーからTODOデータを取得後、取得したTODOデータを反転させて
      // おくことでTODOを追加した順に上から表示させることができる
      // Array.reverseとスプレッド構文を組み合わせて並び替えを行うことで
      // 元の配列要素に影響することなく新しい配列を作成できる
      setTodoList([...todo].reverse());
    });
  }, []);

  // todoListの完了/未完了の真偽値を反転させて
  // 更新するtoggleTodoListItemStatus関数を宣言
  const toggleListItemStatus = (id, done) => {
    // find()は配列から条件に合う値を見つけて最初にtrueになった要素の値を返し、
    // 要素を見つけた時点で処理を停止する
    // 完了/未完了の状態を反転させたいtodoListItemのidを見つけて
    // 条件に一致するtodoItemを返す
    const TodoItem = todoList.find((item) => item.id === id);
    // 現在のtodoListの中から、条件に一致した要素であるtodoItemの完了/未完了を反転させる
    const newTodoItem = { ...TodoItem, done: !done };

    // updateTodoData()を利用して指定されたidのTODOを更新したら
    // 続いてtodoListの状態も更新する
    todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
      const newTodoList = todoList.map((item) =>
        // idが異なる場合、todoListから取り出したitemをそのまま返し
        // 同じ場合じゃ完了/未完了も状態を反転させてupdatedTodoを
        // 返して新しい配列newTodoListを作成
        item.id !== updatedTodo.id ? item : updatedTodo
      );
      // todoListの現在の状態(state)をnewTodoListの内容に更新
      setTodoList(newTodoList);
    });
  };

  // 新規TODOを追加するaddTodoListItem関数を宣言
  const addTodoListItem = (todoContent) => {
    const newTodoItem = {
      // contentは追加するTODOの内容
      content: todoContent,
      // idにulidで生成された一意な値を宣言
      id: ulid(),
      // 追加されたTODOはデフォルトで未完了状態にセット
      done: false,
    };

    // addTodoData()を利用してTODOを更新したら続いてtodoListも更新
    // addTodoData()は新規TODOを追加する関数
    return todoData.addTodoData(newTodoItem).then((addTodo) => {
      // todoListの状態(state)をnewTodoListが追加された状態に更新
      setTodoList([addTodo, ...todoList]);
    });
  };

  // Todoを削除するdeleteTodoListItem関数を宣言
  const deleteTodoListItem = (id) => {
    // todoDataを更新したらtodoListの状態も更新
    // deleteTodoData()を利用して指定されたidのTODOを削除したら
    // 続いてtodoListの状態も更新する
    // deleteTodoData()は一致したidのTODOを削除する関数
    todoData.deleteTodoData(id).then((deleteListItemId) => {
      const newTodoList = todoList.filter(
        // 削除したTODOとidが一致しないTODOをフィルタリングして
        // 新しい配列を返し、idが一致したTODOは除外される
        (item) => item.id !== deleteListItemId
      );
      // todoListの状態を更新
      setTodoList(newTodoList);
    });
  };

  // 作成した関数を返す
  return {
    todoList,
    toggleListItemStatus,
    addTodoListItem,
    deleteTodoListItem,
  };
};

// TodoAddコンポーネントを作成
//親コンポーネントからinputEl,handleAddTodoListItemを
// propsとして受け取る
export const TodoAdd = ({ buttonText,inputEl, handleAddTodoListItem }) => {
    return (
      <>
        {/* useRefで作成したrefオブジェクトをref属性に指定してDOMを参照する */}
        <textarea ref={inputEl} />
        {/* 「+ TODOを追加」ボタンをクリックでhandleAddTodoListItem関数を実行 */}
        <button onClick={handleAddTodoListItem}>{buttonText}</button>
      </>
    );
  };
  
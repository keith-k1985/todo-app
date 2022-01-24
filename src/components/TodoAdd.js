import { Button, Textarea } from '@chakra-ui/react';
// TodoAddコンポーネントを作成
//親コンポーネントからinputEl,handleAddTodoListItemを
// propsとして受け取る
export const TodoAdd = ({
  placeholder,
  leftIcon,
  buttonText,
  inputEl,
  handleAddTodoListItem,
}) => {
  return (
    <>
      {/* useRefで作成したrefオブジェクトをref属性に指定してDOMを参照する */}
      <Textarea
        placeholder={placeholder}
        bgColor='white'
        mt='8'
        borderColor='gray.400'
        ref={inputEl}
      />
      {/* 「+ TODOを追加」ボタンをクリックでhandleAddTodoListItem関数を実行 */}
      <Button
        onClick={handleAddTodoListItem}
        colorScheme='blue'
        leftIcon={leftIcon}
        mt='8'
      >
        {buttonText}
      </Button>
    </>
  );
};

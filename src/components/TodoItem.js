import { DeleteIcon } from '@chakra-ui/icons';
import { Button, Flex, IconButton, ListItem, Text } from '@chakra-ui/react';
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

  const label = todo.done ? '未完了リストへ' : '完了リストへ';
  const setColorScheme = todo.done ? 'pink' : 'blue';

  return (
    <ListItem
      borderWidth='1px'
      p='4'
      mt='4'
      bg='white'
      borderRadius='md'
      borderColor='gray.300'
    >
      {/* TODOの内容 */}
      <Text mb='6'>{todo.content}</Text>
      <Flex align='center' justify='flex-end'>
        {/* TODOが完了の場合は「未完了リストへ」、未完了の場合は「完了リストへ」と表示するボタンを設置する */}
        {/* ボタンクリックでTODOの完了/未完了が反転 */}
        <Button
          colorScheme={setColorScheme}
          variant='outline'
          size='sm'
          onClick={handleToggleTodoListItemStatus}
        >
          {label}
        </Button>
        {/* ボタンクリックでTODOを削除 */}
        <IconButton
          icon={<DeleteIcon />}
          variant='unstyled'
          aria-label='delete'
          onClick={handleDeleteTodoListItem}
        />
      </Flex>
    </ListItem>
  );
};

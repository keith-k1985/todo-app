import { List } from '@chakra-ui/react';
import { TodoItem } from './TodoItem';
import { TodoTitle } from './TodoTitle';

// TodoListコンポーネントを作成
//  親コンポーネントからtodoListをpropsとして受け取る
export const TodoList = ({
  todoList,
  toggleTodoListItemStatus,
  deleteTodoListItem,
  title,
  as,
  fontSize
}) => {
  return (
    <>
      {/* TodoListの配列の中身が空の場合は見出しとTODOリストの */}
      {/* 両方を表示させない */}
      {todoList.length !== 0 && (
        <>
          <TodoTitle title={title} as={as} fontSize={fontSize} mt="12" />
          <List w="full">
            {/* map()を利用してtodoListの要素を1つひとつ取り出す  */}
            {todoList.map((todo) => (
              // TodoItemに一意なIDをkey属性の値として付与
              // todoListから取り出したtodoを子コンポーネントへpropsとして渡す
              <TodoItem
                todo={todo}
                key={todo.id}
                toggleTodoListItemStatus={toggleTodoListItemStatus}
                deleteTodoListItem={deleteTodoListItem}
              />
            ))}
          </List>
        </>
      )}
    </>
  );
};

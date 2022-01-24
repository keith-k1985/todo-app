import { Heading } from '@chakra-ui/react';
import { memo } from 'react';

// TodoTitleコンポーネントを作成
// 見出しタグがh1,h2mp場合の条件分岐を作成しておく
// 親コンポーネントからtitle,asをpropsとして受け取る
export const TodoTitle = memo(({ title, as, fontSize, mt }) => {
  return (
    // HeadingコンポーネントではすべてのStylePros利用できる
    // Headingコンポーネントはデフォルトではh2タグを出力する
    <Heading mt={mt} as={as} fontSize={fontSize} w='full'>
      {title}
    </Heading>
  );
});

import { memo } from 'react';

// TodoTitleコンポーネントを作成
// 見出しタグがh1,h2mp場合の条件分岐を作成しておく
// 親コンポーネントからtitle,asをpropsとして受け取る
export const TodoTitle = memo(({ title, as }) => {
  // asがh1ならタイトルはh1たぐ
  if (as === 'h1') return <h1>{title}</h1>;

  // asがh2ならタイトルはh1たぐ
  if (as === 'h2') return <h1>{title}</h1>;
  return <p>{title}</p>;
});

// chakra-uiのextendThemeを利用して
// グローバルに適用したいテーマを設定
import { extendTheme } from '@chakra-ui/react';

// extendThemeを利用してアプリ全体に適用されるグローバルなテーマを定義
const theme = extendTheme({
  styles: {
    // グローバルスタイルを追加や上書きするには
    // テーマのtheme.styles.globalを更新する
    global: {
      body: {
        // bodyに指定したいstyleを指定
        backgroundColor: 'orange.50',
        color: 'gray.800',
      },
      p: {
        // mdを境にPC表示とSP表示を切り替える
        fontSize: { base: 'md', md: 'lg' },
        lineHeight: 'tall', // tall=1.5
      },
    },
  },
});

export default theme;

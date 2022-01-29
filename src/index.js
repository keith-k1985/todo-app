import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
// Chakra UIのChakraProviderを利用できるようにする
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import App from './components/App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    {/* Chakra-UIを正しく機能さるためにアプリケーションのルートで */}
    {/* ChakraProviderを設置 */}
    {/* ChakraProviderに作成したthemeを渡す */}
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  rootElement
);

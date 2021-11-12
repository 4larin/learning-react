import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes';
import GlobalStyle from './styles/GlobalStyles';
import { Provider } from 'react-redux'
import Store from './redux/store'
import 'antd/dist/antd.css'

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;







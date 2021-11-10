import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes';
import GlobalStyle from './styles/GlobalStyles';
import 'antd/dist/antd.css'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;







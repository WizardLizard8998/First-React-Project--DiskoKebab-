import './themes.css';
import RouterPage from './PAGES/routerPage';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    text: {
      primary: '#fff'
    },
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#999'
    }
  },
});

function App() {
  return (

    <ThemeProvider theme={theme}>
      <RouterPage />
    </ThemeProvider>
  );
}

export default App;

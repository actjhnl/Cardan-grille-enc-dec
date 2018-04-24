import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store'
//material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createPalette from 'material-ui/styles/createPalette'
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import {amber, red, blue} from 'material-ui/colors'

const muiTheme = createMuiTheme({
	palette: createPalette({
		primary: red,
		accent: amber,
		error: red,
		type: 'dark'
	})
})

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

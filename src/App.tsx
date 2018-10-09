import React from 'react';

import {
    createMuiTheme,
    MuiThemeProvider
} from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    }
});

class App extends React.Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <h1>Welcome to React</h1>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;

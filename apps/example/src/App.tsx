import React from 'react';

import {
    createMuiTheme,
    MuiThemeProvider
} from '@material-ui/core/styles';

import Hello from './hello';

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
                <Hello noop />
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;

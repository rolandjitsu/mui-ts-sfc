import React from 'react';

import {
    createStyles,
    Theme,
    withStyles,
    WithStyles
} from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    root: {
        color: 'red'
    }
});

const style = withStyles(styles);

class Hello extends React.Component<Props, {}> {
  render() {
      const {classes} = this.props;
    return (
        <div className={classes.root}>
            <h1>Hello :)</h1>
        </div>
    );
  }
}

export default style<Props>(Hello);


type Props = WithStyles<typeof styles>;

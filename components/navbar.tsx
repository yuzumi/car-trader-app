import React from 'react';
import Link from 'next/link';
import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" className={classes.title}>
          Car Trader App
        </Typography>

        <Button color="inherit">
          <Link href="/">
            <a className={classes.link}>
              <Typography  color="inherit">
                Home
              </Typography>
            </a>
          </Link>
        </Button>

        <Button color="inherit">
          <Link href="/faq">
            <a className={classes.link}>
              <Typography  color="inherit">
                FAQ
              </Typography>
            </a>
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

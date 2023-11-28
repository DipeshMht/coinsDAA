import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 25,
    marginLeft: 15,
    marginRight: 15,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: 'white', // Change text color to white
    background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.3))', // Glass prism effect
    backdropFilter: 'blur(5px)', // Blur effect
    boxShadow: '0 8px 32px 0 rgba(40, 40, 40, 0.6)', // Shadow
    borderRadius: '10px', // Rounded corners
  },
}));

export default function News() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>Altcoin Rally Cools as Massive $650M Worth of Token Unlocks Loom Over Crypto Market</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Regulatory Roulette: Changpeng Zhao's exit tests crypto's resilience</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Bitcoin trades highest since May 2022, Solana triples in the past month</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>Bitcoin Is Up 120% This Year, Here Are Four Other Cryptos To Buy, HODL Or Sell</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>JPMorgan And Apollo Executives Reveal Plan For A Tokenized ‘Enterprise Mainnet’</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>FTX founder Bankman-Fried charged with paying $40 million bribe</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

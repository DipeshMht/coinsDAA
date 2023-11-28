import { Container, makeStyles, Typography } from "@material-ui/core";
import Slider from "./Slider"; // Renaming Carousel to Slider

const useStyles = makeStyles((theme) => ({
  bannerContent: {
    height: 300,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function DisplayCoin() {
  const classes = useStyles();

  return (
    <div className={classes.displayCoin}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
          >
            One of the trending Machine Learning Integrated Crypto Currency Tracker
          </Typography>
        </div>
        <Slider /> {/* Using the updated Slider component */}
      </Container>
    </div>
  );
}

export default DisplayCoin;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    
  },
  formControl: {
    margin: "5",
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: "5",
  },
});

export default function ProductCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          height="420"
          alt={props.products.Name}
          image={props.products.Images}
          title={props.products.Name}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="p">
            {props.products.Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.products["Regular price"]} $ 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}

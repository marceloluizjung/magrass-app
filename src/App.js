import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, TextField, Typography } from '@material-ui/core';
import styled from 'styled-components';
import './App.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const SearchButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: white;
  background: #004d7a;
  border: 1px solid ${props => props.theme.main};
`;
SearchButton.defaultProps = {
  theme: {
    main: "transparent"
  }
}

const Input = styled.input`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
color: black;
border: 1px solid ${props => props.theme.main};
`
Input.defaultProps = {
  theme: {
    main: "transparent"
  }
}

const Container = styled.input``;

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 15
  },
  media: {
    height: 140,
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="Container">
      <div className="Header">
        <TextField id="standard-basic" label="Standard" />
        <Button variant="contained" color="primary">Buscar</Button>
      </div>
      <div className="Body">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
      </Card>

      <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
      </Card>

      <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
      </Card>
      </div>
      <div className="Footer">
        <span style={{padding: "5px"}}>Created by Marcelo Luiz Jung</span>
        <GitHubIcon style={{padding: "5px"}}></GitHubIcon>
        <LinkedInIcon style={{padding: "5px"}}></LinkedInIcon>
      </div>
    </div>
  );
}

export default App;

import { Button, Card, CardActionArea, CardContent, CardMedia, CircularProgress, makeStyles, TextField, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Axios from 'axios';
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import './App.css';

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
var controll = true;
function App() {
  let [today, setToday] = useState('');
  let [tomorrow, setTomorrow] = useState('');
  let [afterTomorrow, setAfterTomorrow] = useState('');
  let [valueInput, setValueInput] = useState('');
  let [filter, setFilter] = useState('');
  let [city, setCity] = useState('');
  let [loader, setLoader] = useState('');
  const classes = useStyles();
   
  useEffect(() => {
    if(controll || filter == 'buscar') {
      setLoader(true);
      getForecast(valueInput).then(({data}) => {
        setToday(data.forecast.forecastday[0]);
        setTomorrow(data.forecast.forecastday[1]);
        setAfterTomorrow(data.forecast.forecastday[2]);
        setCity(data.location.name);
        controll = false;
        setFilter('');
        setLoader(false);
      },[valueInput]);
  }
  });

  return (
    <div className="Container">
      <div className="Header">
        <TextField id="standard-basic" label="Cidade" onChange={valueInputChange}/>
        <Button variant="contained" color="primary" onClick={search}>Buscar</Button>
      </div>
      <Rtif boolean={loader}>
        <div className="Body">
          <CircularProgress color="secondary"/>
        </div>
      </Rtif>
      <Rtif boolean={!loader}>
        <div className="Body">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={today ? today.day.condition.icon : ''}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {today ? today.date : ''}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    <div className="Container-data">
                        <p>{today ? today.day.condition.text : ''}</p>
                      <div className="Data">
                        <img width="20" height="20" src="https://www.flaticon.com/svg/static/icons/svg/2041/2041670.svg" alt="High temperature free icon" title="High temperature free icon" class="loaded"></img>
                        <p>{today ? today.day.maxtemp_c : ''} Cº</p>
                      </div>
                      <div className="Data">
                        <img width="20" height="20" src="https://www.flaticon.com/svg/static/icons/svg/661/661346.svg" alt="Low temperature free icon" title="Low temperature free icon" class="loaded"></img>
                        <p>{today ? today.day.mintemp_c : ''} Cº</p>
                      </div>
                      <div className="Data">
                        <img width="20" height="20" src="https://www.flaticon.com/svg/static/icons/svg/728/728093.svg" alt="Humidity free icon" title="Humidity free icon" class="loaded"></img>
                        <p>{today ? today.day.avghumidity : ''} %</p>
                      </div>
                      <p>{city}</p>
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
          </Card>
          <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={tomorrow ? tomorrow.day.condition.icon : ''}
                  title="Contemplative Reptile"/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {tomorrow ? tomorrow.date : ''}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  <div className="Container-data">
                      <p>{tomorrow ? tomorrow.day.condition.text : ''}</p>
                    <div className="Data">
                      <img width="20" height="20" src="https://www.flaticon.com/svg/static/icons/svg/2041/2041670.svg" alt="High temperature free icon" title="High temperature free icon" class="loaded"></img>
                      <p>{tomorrow ? tomorrow.day.maxtemp_c : ''} Cº</p>
                    </div>
                    <div className="Data">
                      <img width="20" height="20" src="https://www.flaticon.com/svg/static/icons/svg/661/661346.svg" alt="Low temperature free icon" title="Low temperature free icon" class="loaded"></img>
                      <p>{tomorrow ? tomorrow.day.mintemp_c : ''} Cº</p>
                    </div>
                    <div className="Data">
                      <img width="20" height="20" src="https://www.flaticon.com/svg/static/icons/svg/728/728093.svg" alt="Humidity free icon" title="Humidity free icon" class="loaded"></img>
                      <p>{tomorrow ? tomorrow.day.avghumidity : ''} %</p>
                    </div>
                    <p>{city}</p>
                  </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
          </Card>
          <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={afterTomorrow ? afterTomorrow.day.condition.icon : ''} title="Contemplative Reptile"/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {afterTomorrow ? afterTomorrow.date : ''}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  <div className="Container-data">
                      <p>{afterTomorrow ? afterTomorrow.day.condition.text : ''}</p>
                    <div className="Data">
                      <img width="20" height="20" src="https://www.flaticon.com/svg/static/icons/svg/2041/2041670.svg" alt="High temperature free icon" title="High temperature free icon" class="loaded"></img>
                      <p>{afterTomorrow ? afterTomorrow.day.maxtemp_c : ''} Cº</p>
                    </div>
                    <div className="Data">
                      <img width="20" height="20" src="https://www.flaticon.com/svg/static/icons/svg/661/661346.svg" alt="Low temperature free icon" title="Low temperature free icon" class="loaded"></img>
                      <p>{afterTomorrow ? afterTomorrow.day.mintemp_c : ''} Cº</p>
                    </div>
                    <div className="Data">
                      <img width="20" height="20" src="https://www.flaticon.com/svg/static/icons/svg/728/728093.svg" alt="Humidity free icon" title="Humidity free icon" class="loaded"></img>
                      <p>{afterTomorrow ? afterTomorrow.day.avghumidity : ''} %</p>
                    </div>
                    <p>{city}</p>
                  </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
          </Card>
        </div>
      </Rtif>
      <div className="Footer">
        <span style={{padding: "5px"}}>Created by Marcelo Luiz Jung</span>
        <GitHubIcon style={{padding: "5px"}}></GitHubIcon>
        <LinkedInIcon style={{padding: "5px"}}></LinkedInIcon>
      </div>
    </div>
  );

  function valueInputChange(event) {
    setValueInput(event.target.value);
  }

  function search() {
    setLoader(true);
    setFilter('buscar');
  }

  function getForecast(city) {
    const options = {
      headers: {'x-rapidapi-key': '700f16d8e4msh2cab2ef204d9143p1b6de6jsn1a6ef6555485', 'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com', 'useQueryString': 'true'}
    };
    if (city == null || city.length == 0) city = 'Brasil';
    return Axios.get(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`, options);
  }
}

export default App;

export function Rtif({boolean, ...props}) {
  const { children } = props;
  if (boolean)
      return (
              {...children}
      );
  return null;
}

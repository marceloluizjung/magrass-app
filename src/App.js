import { Button, Card, CardActionArea, CardContent, CardMedia, CircularProgress, makeStyles, TextField, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Axios from 'axios';
import moment from "moment";
import React, { useEffect, useState } from "react";
import './App.css';

/**
 * Css dos cards
 */
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 15
  },
  media: {
    height: 140,
  },
});

//Variável de controle para exibição dos cards
var controll = true;
function App() {
  //States (States são os valores que são usados em tela, async)
  let [today, setToday] = useState('');
  let [tomorrow, setTomorrow] = useState('');
  let [afterTomorrow, setAfterTomorrow] = useState('');
  let [todayFormatedDate, setTodayFormatedDate] = useState('');
  let [tomorrowFormatedDate, setTomorrowFormatedDate] = useState('');
  let [afterTomorrowFormatedDate, setAfterTomorrowFormatedDate] = useState('');
  let [valueInput, setValueInput] = useState('');
  let [filter, setFilter] = useState('');
  let [city, setCity] = useState('');
  let [loader, setLoader] = useState('');
  const classes = useStyles();
   
  //Fica escutando a "valueInput"
  useEffect(() => {
    if(filter == 'buscar') {
      setLoader(true);
      getForecast(valueInput).then(({data}) => {
        setTodayFormatedDate(moment(data.forecast.forecastday[0].date).format("DD/MM/YYYY"));
        setTomorrowFormatedDate(moment(data.forecast.forecastday[1].date).format("DD/MM/YYYY"));
        setAfterTomorrowFormatedDate(moment(data.forecast.forecastday[2].date).format("DD/MM/YYYY"));
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
          <TextField id="standard-basic" label="Cidade" onChange={valueInputChange} autoComplete="off" />
          <Button variant="contained" color="primary" onClick={search}>Buscar</Button>
      </div>
      <Rtif boolean={loader}>
          <div className="Body">
              <CircularProgress color="secondary" />
          </div>
      </Rtif>
      <Rtif boolean={!loader && !controll}>
          <div className="Body">
              <Card className={classes.root}>
                  <CardActionArea>
                      <CardMedia className={classes.media} image={today ? today.day.condition.icon : '' }
                          title="Contemplative Reptile" />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                              {todayFormatedDate}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                              <div className="Container-data">
                                  <p>{today ? today.day.condition.text : ''}</p>
                                  <div className="Data">
                                      <img width="20" height="20"
                                          src="https://www.flaticon.com/svg/static/icons/svg/2041/2041670.svg"
                                          alt="High temperature free icon" title="High temperature free icon"
                                          class="loaded"></img>
                                      <p>{today ? today.day.maxtemp_c : ''} Cº</p>
                                  </div>
                                  <div className="Data">
                                      <img width="20" height="20"
                                          src="https://www.flaticon.com/svg/static/icons/svg/661/661346.svg"
                                          alt="Low temperature free icon" title="Low temperature free icon"
                                          class="loaded"></img>
                                      <p>{today ? today.day.mintemp_c : ''} Cº</p>
                                  </div>
                                  <div className="Data">
                                      <img width="20" height="20"
                                          src="https://www.flaticon.com/svg/static/icons/svg/728/728093.svg"
                                          alt="Humidity free icon" title="Humidity free icon" class="loaded"></img>
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
                      <CardMedia className={classes.media} image={tomorrow ? tomorrow.day.condition.icon : '' }
                          title="Contemplative Reptile" />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                              {tomorrowFormatedDate}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                              <div className="Container-data">
                                  <p>{tomorrow ? tomorrow.day.condition.text : ''}</p>
                                  <div className="Data">
                                      <img width="20" height="20"
                                          src="https://www.flaticon.com/svg/static/icons/svg/2041/2041670.svg"
                                          alt="High temperature free icon" title="High temperature free icon"
                                          class="loaded"></img>
                                      <p>{tomorrow ? tomorrow.day.maxtemp_c : ''} Cº</p>
                                  </div>
                                  <div className="Data">
                                      <img width="20" height="20"
                                          src="https://www.flaticon.com/svg/static/icons/svg/661/661346.svg"
                                          alt="Low temperature free icon" title="Low temperature free icon"
                                          class="loaded"></img>
                                      <p>{tomorrow ? tomorrow.day.mintemp_c : ''} Cº</p>
                                  </div>
                                  <div className="Data">
                                      <img width="20" height="20"
                                          src="https://www.flaticon.com/svg/static/icons/svg/728/728093.svg"
                                          alt="Humidity free icon" title="Humidity free icon" class="loaded"></img>
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
                      <CardMedia className={classes.media} image={afterTomorrow ? afterTomorrow.day.condition.icon : '' }
                          title="Contemplative Reptile" />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                              {afterTomorrowFormatedDate}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                              <div className="Container-data">
                                  <p>{afterTomorrow ? afterTomorrow.day.condition.text : ''}</p>
                                  <div className="Data">
                                      <img width="20" height="20"
                                          src="https://www.flaticon.com/svg/static/icons/svg/2041/2041670.svg"
                                          alt="High temperature free icon" title="High temperature free icon"
                                          class="loaded"></img>
                                      <p>{afterTomorrow ? afterTomorrow.day.maxtemp_c : ''} Cº</p>
                                  </div>
                                  <div className="Data">
                                      <img width="20" height="20"
                                          src="https://www.flaticon.com/svg/static/icons/svg/661/661346.svg"
                                          alt="Low temperature free icon" title="Low temperature free icon"
                                          class="loaded"></img>
                                      <p>{afterTomorrow ? afterTomorrow.day.mintemp_c : ''} Cº</p>
                                  </div>
                                  <div className="Data">
                                      <img width="20" height="20"
                                          src="https://www.flaticon.com/svg/static/icons/svg/728/728093.svg"
                                          alt="Humidity free icon" title="Humidity free icon" class="loaded"></img>
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
      <Rtif boolean={!loader && controll}>
          <div className="Empty">
              <div>
                  <img width="200" height="200" src="https://www.flaticon.com/svg/static/icons/svg/2039/2039107.svg"
                      alt="Inbox free icon" title="Inbox free icon" class="loaded"></img>
              </div>
              <div>
                  <p>Insira a cidade acima para consultar</p>
              </div>
          </div>
      </Rtif>
      <div className="Footer">
          <span style={{padding: "5px"}}>Created by Marcelo Luiz Jung</span>
          <a href="https://github.com/marceloluizjung/magrass-app" target="_blank">
              <GitHubIcon style={{padding: "5px", color: "black"}}></GitHubIcon>
          </a>
          <a href="https://www.linkedin.com/in/marcelo-luiz-jung-5443ab121" target="_blank">
              <LinkedInIcon style={{padding: "5px", color: "#2867B2"}}></LinkedInIcon>
          </a>
      </div>
    </div>
  );

  /**
   * @description - Atualiza o estado da variável responsável por guardar
   * a entrada do user
   * @param {*} event - Evento disparado quando o usuário inputar algo
   */
  function valueInputChange(event) {
    setValueInput(event.target.value);
  }

  /**
   * @description - Atualiza os estados das variáveis "loader" e "filter"
   */
  function search() {
    setLoader(true);
    setFilter('buscar');
  }

  /**
   * Retorna uma promisse do Axios (get), responsável pela chamada ao back.
   * Default 3 dias.
   * @param {*} city - Cidade a ser pesquisado o clima
   */
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

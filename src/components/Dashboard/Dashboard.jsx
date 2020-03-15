import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Filter } from '../Filter/Filter';
import { CardList } from '../CardList/CardList';
import { Detail } from '../Detail/Detail';

import { WATCH_GET_WEATHER, WATCH_IS_WEATHER_LOADING } from './constants';
import { ContainerWrapper, Container, Loading, Header } from './styles';

function Dashboard({ weather, isLoading, getWeather, toggleWeatherLoading }) {
  const [detail, setDetail] = useState();
  const [today, setToday] = useState(true);

  useEffect(() => {
    if (weather.length > 0) {
      setDetail(weather[0]);
      setToday(true);
    } else {
      setDetail();
      setToday(false);
    }
  }, [weather]);

  const onFilter = (city) => {
    toggleWeatherLoading(true);
    getWeather(city);
  }

  const onSelectedCard = (data) => {
    setDetail(data);
    setToday(false);
  }

  return (
    <ContainerWrapper>
      <Container>
        <Filter onFilter={onFilter} />
        <Header>
          <label> Previsão para a semana:</label>
        </Header>        
        {!isLoading ? 
          (<CardList data={weather} onSelectedCard={onSelectedCard} />) 
          : 
          (<Loading>Carregando...</Loading>)
        }
      </Container>
      <Detail data={detail} today={today} />
    </ContainerWrapper>
  )
}

const mapStateToProps = ({weather}) => {
  return {
    ...weather
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: city => dispatch({ type: WATCH_GET_WEATHER, city }),
    toggleWeatherLoading: isLoading => dispatch({type: WATCH_IS_WEATHER_LOADING, isLoading}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
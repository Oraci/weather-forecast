import React from 'react';
import { Card } from '../Card/Card';

import { Container, ContainerList, Text, NoResults } from './styles';

export const CardList = ({ data, onSelectedCard }) => {
  return (
    <Container>
      {data.length > 0 ? (
        <>
          <Text>Forecast for the week:</Text>
          <ContainerList>
            {data.map((item, key) => {
              return (
                <Card data={item} key={key} onSelectedCard={onSelectedCard} />
              );
            })}
          </ContainerList>
        </>
      ) : (
        <NoResults>No records</NoResults>
      )}
    </Container>
  );
};

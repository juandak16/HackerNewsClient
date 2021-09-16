import React, { useState } from 'react';

//Import Components
import { Header } from '../../Components/Header';
import { TabSelector } from '../../Components/TabSelector';
import { FilterDropdown } from '../../Components/FilterDropdown';
import { Loading } from '../../Components/Loading';
import { Error } from '../../Components/Error';

//import utils data
import { newsType, tabs } from './utils';

//Custom Styled Components
import { HomeContainer, Body, CardsContent } from './styles'


const Home = () => {
  const [tabActived, setTabActived] = useState("all");
  const [typeSelected, setTypeSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(newsType);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <HomeContainer>
      <Header />
      <Body>
        <TabSelector
          tabActived={tabActived}
          setTabActived={setTabActived}
          tabs={tabs}
        />
        <FilterDropdown
          typeSelected={typeSelected}
          setTypeSelected={setTypeSelected}
          options={newsType}
        />
        <CardsContent>

        </CardsContent>
      </Body>
    </HomeContainer>
  );
}

export default Home;
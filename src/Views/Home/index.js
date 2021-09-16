import React, { useState, useEffect } from 'react';


//Import Components
import { Header } from '../../Components/Header';
import { TabSelector } from '../../Components/TabSelector';
import { FilterDropdown } from '../../Components/FilterDropdown';
import { PostCard } from '../../Components/PostCard';
import { Loading } from '../../Components/Loading';
import { Error } from '../../Components/Error';

//import utils data
import { newsType, tabs } from './utils';

import { useApiCall } from '../../Hooks';

//Custom Styled Components
import { HomeContainer, Body, CardsContent } from './styles'


const Home = () => {
  const [tabActived, setTabActived] = useState("all");
  const [typeSelected, setTypeSelected] = useState(null);
  const [page, setPage] = useState(0);

  const response = useApiCall(typeSelected?.value, page);

  if (response.error) {
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
        {!response.loading ?
          <CardsContent>
            {
              response && response.data.map((item, index) => {
                return (
                  <PostCard
                    author={item.author}
                    date={item.created_at}
                    title={item.story_title}
                    url={item.story_url}
                    key={`${index}-${item.author}`}
                  />
                )
              })
            }

          </CardsContent>
          : <Loading />
        }
      </Body>
    </HomeContainer>
  );
}

export default Home;
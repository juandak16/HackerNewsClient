import React, { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";


//Import Components
import { Header } from '../../Components/Header';
import { TabSelector } from '../../Components/TabSelector';
import { FilterDropdown } from '../../Components/FilterDropdown';
import { PostCard } from '../../Components/PostCard';
import { Loading } from '../../Components/Loading';
import { Error } from '../../Components/Error';

//import utils data
import { newsType, tabs, getKey } from './utils';

import { useApiCall } from '../../Hooks';

//Custom Styled Components
import { HomeContainer, Body, CardsContent, Footer } from './styles'

const limit = 8;

const Home = () => {
  const indexSelect = newsType.findIndex(
    (item) => item.value === localStorage.getItem('typeSelectedStorage')
  );
  const [tabActived, setTabActived] = useState("all");
  const [typeSelected, setTypeSelected] = useState(newsType[indexSelect]);
  const [faves, setFaves] = useState(
    localStorage.getItem('favesStorage') ?
      JSON.parse(localStorage.getItem('favesStorage'))
      : []);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);

  const { ref, inView } = useInView({ trackVisibility: true, delay: 300 });

  let response = useApiCall(typeSelected?.value, page, limit);

  useEffect(() => {
    if (response?.data) {
      let newArray = data.concat(response.data);
      setData([...new Set(newArray)]);
    }
  }, [response.data]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (inView)
      setPage(page + 1)
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  const manageFave = (item) => {
    const exists = faves.find(fav => getKey(fav) === getKey(item));
    let newArray = [];

    if (exists) {
      newArray = faves.filter((fav) => getKey(fav) !== getKey(item));
      localStorage.setItem('favesStorage', JSON.stringify(newArray));
      setFaves(newArray);
    } else {
      newArray = [...faves, item];
      localStorage.setItem('favesStorage', JSON.stringify(newArray));
      setFaves([...faves, item]);
    };
  }

  const manageFilter = (item) => {
    setPage(0);
    setData([]);
    localStorage.setItem('typeSelectedStorage', item.value);
    setTypeSelected(item);
  }

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
          setTypeSelected={manageFilter}
          options={newsType}
          disable={tabActived !== "all"}
        />
        {!response.loading ?
          <CardsContent>
            {tabActived === "all" ?
              data && data?.map((item, index) => {
                return (
                  <PostCard
                    item={item}
                    key={`${index}-${item.author}`}
                    faved={faves.find(fav => getKey(fav) === getKey(item))}
                    manageFave={manageFave}
                  />
                );
              })
              :
              faves?.map((item, index) => {
                return (
                  <PostCard
                    item={item}
                    key={`${index}-${item.author}`}
                    faved={faves.find(fav => getKey(fav) === getKey(item))}
                    manageFave={manageFave}
                  />
                )
              })
            }

          </CardsContent>
          : <Loading />
        }
      </Body>
      <Footer ref={ref} />
    </HomeContainer>
  );
}

export default Home;
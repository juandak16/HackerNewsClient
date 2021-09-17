import React, { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";


//Import Components
import { Navbar } from '../../Components/Navbar';
import { TabSelector } from '../../Components/TabSelector';
import { FilterDropdown } from '../../Components/FilterDropdown';
import { PostCard } from '../../Components/PostCard';
import { Loading } from '../../Components/Loading';
import { Error } from '../../Components/Error';

//import utils data
import { newsType, getKey } from './utils';

import { useApiCall } from '../../Hooks';

//Custom Styled Components
import { HomeContainer, BodyHome, CardsContent, FooterHome } from './styles'

//limit count post by query
const limit = 8;

const Home = () => {
  //get typeSelectedStorage index
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

  //implementation of the intersection observer
  const { ref, inView } = useInView({ trackVisibility: true, delay: 300 });

  //data query, which is executed when the page or typeSelected changes.
  let response = useApiCall(typeSelected?.value, page, limit);

  //concatenating new data
  useEffect(() => {
    if (response?.data) {
      let newArray = data.concat(response.data);
      setData([...new Set(newArray)]);
    }
  }, [response.data]); // eslint-disable-line react-hooks/exhaustive-deps

  //execute page change when viewport is in footer
  useEffect(() => {
    if (inView)
      setPage(page + 1)
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  //add or delete favorite stories
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

  //change filter selected
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
      <Navbar />
      <BodyHome >
        <TabSelector
          tabActived={tabActived}
          setTabActived={setTabActived}
        />
        <FilterDropdown
          typeSelected={typeSelected}
          manageFilter={manageFilter}
          options={newsType}
          disable={tabActived !== "all"}
        />
        <CardsContent>
          {tabActived === "all" ?
            data && data?.map((item, index) => {
              return (
                <PostCard
                  item={item}
                  key={`${index}-${item.author}`}
                  faved={faves.find(fav => getKey(fav) === getKey(item)) ? true : false}
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
                  faved={faves.find(fav => getKey(fav) === getKey(item)) ? true : false}
                  manageFave={manageFave}
                />
              )
            })
          }
        </CardsContent>
      </BodyHome >
      {tabActived === "all" ?
        <FooterHome ref={ref}>
          <Loading />
        </FooterHome>
        : <FooterHome>
          <Loading />
        </FooterHome>}
    </HomeContainer>
  );
}

export default Home;
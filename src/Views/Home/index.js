import React, { useState } from 'react';

//Import Components
import { Header } from '../../Components/Header';
import { TabSelector } from '../../Components/TabSelector';
import { Loading } from '../../Components/Loading';
import { Error } from '../../Components/Error';

//Custom Styled Components
import { HomeContainer } from './styles'

const tabs = [
  { title: "All", value: "all" },
  { title: "My faves", value: "faves" }
]

const Home = () => {
  const [tabActived, setTabActived] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <HomeContainer>
      <Header />
      <TabSelector
        tabActived={tabActived}
        setTabActived={setTabActived}
        tabs={tabs}
      />
    </HomeContainer>
  );
}

export default Home;
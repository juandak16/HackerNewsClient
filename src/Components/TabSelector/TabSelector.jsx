import React from 'react';

//Custom Styled Components
import { Container, ButtonSelect } from './styles';

export const TabSelector = (props) => {
  const { tabActived, setTabActived } = props;

  const TABS = [
    { title: "All", value: "all" },
    { title: "My faves", value: "faves" }
  ]

  return (
    <Container data-testid="home-tab-selector">
      {
        TABS?.map((tab, index) => (
          <ButtonSelect
            onClick={() => { setTabActived(tab.value) }}
            key={index}
            actived={tab.value === tabActived}
          >
            {tab.title}
          </ButtonSelect>
        ))
      }
    </Container>
  )
}
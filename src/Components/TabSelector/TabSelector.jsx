import React from 'react';

//Custom Styled Components
import { Container, ButtonSelect } from './styles';

export const TabSelector = (props) => {
  const { tabActived, setTabActived, tabs } = props;

  return (
    <Container>
      {
        tabs && tabs.map((tab, index) => (
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
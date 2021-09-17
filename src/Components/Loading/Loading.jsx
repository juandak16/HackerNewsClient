import React from 'react';

import './styles.css';

// Custom Styled Components
import { Container } from "./styles";

export const Loading = () => {
  return (
    <Container>
      <div className="lds-heart">
        <div></div>
      </div>
    </Container>
  )
}
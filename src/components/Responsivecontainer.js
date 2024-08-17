
import React from 'react';
import { Container } from '@material-ui/core';

function ResponsiveContainer({ children }) {
  return (
    <Container maxWidth="sm">
      {children}
    </Container>
  );
}

export default ResponsiveContainer;

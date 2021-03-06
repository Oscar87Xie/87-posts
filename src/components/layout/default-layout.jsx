import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import Header from './header';
import Footer from './footer';

const DefaultLayout = ({ children }) => (
  <Box
    display="grid"
    gridTemplateRows="auto 1fr auto"
    minHeight="100vh"
    lineHeight="tall"
    letterSpacing="wide"
  >
    <Header />
    <Box
      as="main"
      minWidth="0"
      px="6"
      pt="8"
      py="4"
    >
      {children}
    </Box>
    <Footer />
  </Box>
);

export default DefaultLayout;

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

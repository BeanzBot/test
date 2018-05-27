import React from 'react';
import { Header } from 'semantic-ui-react';
import Zones from '../zones/zone';

export const Title = () => <Header as="h1">First Header</Header>;
const Home = () => (
  <div>
    <Title /> <Zones />
  </div>
);

export default Home;

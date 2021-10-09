import React from 'react';

import Header from '../../components/Header';
import StoryList from '../../components/StoryList';
import { Container } from './styles';

const array = [
  {
    name: 'testedfklfdkl',
    uri: 'https://instagram.fsjk1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/97170162_575921693350366_6329294829381484544_n.jpg?_nc_ht=instagram.fsjk1-1.fna.fbcdn.net&_nc_ohc=0zH7974ibAUAX_EfD_W&edm=ABfd0MgBAAAA&ccb=7-4&oh=d8bba42db9ee453fb6c2a6d81909e9b3&oe=61684EDC&_nc_sid=7bff83',
  },
  {
    name: 'aaa',
    uri: 'https://instagram.fsjk1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/97170162_575921693350366_6329294829381484544_n.jpg?_nc_ht=instagram.fsjk1-1.fna.fbcdn.net&_nc_ohc=0zH7974ibAUAX_EfD_W&edm=ABfd0MgBAAAA&ccb=7-4&oh=d8bba42db9ee453fb6c2a6d81909e9b3&oe=61684EDC&_nc_sid=7bff83',
  },
  {
    name: 'bbb',
    uri: 'https://instagram.fsjk1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/97170162_575921693350366_6329294829381484544_n.jpg?_nc_ht=instagram.fsjk1-1.fna.fbcdn.net&_nc_ohc=0zH7974ibAUAX_EfD_W&edm=ABfd0MgBAAAA&ccb=7-4&oh=d8bba42db9ee453fb6c2a6d81909e9b3&oe=61684EDC&_nc_sid=7bff83',
  },
  {
    name: 'ccc',
    uri: 'https://instagram.fsjk1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/97170162_575921693350366_6329294829381484544_n.jpg?_nc_ht=instagram.fsjk1-1.fna.fbcdn.net&_nc_ohc=0zH7974ibAUAX_EfD_W&edm=ABfd0MgBAAAA&ccb=7-4&oh=d8bba42db9ee453fb6c2a6d81909e9b3&oe=61684EDC&_nc_sid=7bff83',
  },
  {
    name: 'ddd',
    uri: 'https://instagram.fsjk1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/97170162_575921693350366_6329294829381484544_n.jpg?_nc_ht=instagram.fsjk1-1.fna.fbcdn.net&_nc_ohc=0zH7974ibAUAX_EfD_W&edm=ABfd0MgBAAAA&ccb=7-4&oh=d8bba42db9ee453fb6c2a6d81909e9b3&oe=61684EDC&_nc_sid=7bff83',
  },
  {
    name: 'eee',
    uri: 'https://instagram.fsjk1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/97170162_575921693350366_6329294829381484544_n.jpg?_nc_ht=instagram.fsjk1-1.fna.fbcdn.net&_nc_ohc=0zH7974ibAUAX_EfD_W&edm=ABfd0MgBAAAA&ccb=7-4&oh=d8bba42db9ee453fb6c2a6d81909e9b3&oe=61684EDC&_nc_sid=7bff83',
  },
  {
    name: 'ffff',
    uri: 'https://instagram.fsjk1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/97170162_575921693350366_6329294829381484544_n.jpg?_nc_ht=instagram.fsjk1-1.fna.fbcdn.net&_nc_ohc=0zH7974ibAUAX_EfD_W&edm=ABfd0MgBAAAA&ccb=7-4&oh=d8bba42db9ee453fb6c2a6d81909e9b3&oe=61684EDC&_nc_sid=7bff83',
  },
  {
    name: 'ggg',
    uri: 'https://instagram.fsjk1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/97170162_575921693350366_6329294829381484544_n.jpg?_nc_ht=instagram.fsjk1-1.fna.fbcdn.net&_nc_ohc=0zH7974ibAUAX_EfD_W&edm=ABfd0MgBAAAA&ccb=7-4&oh=d8bba42db9ee453fb6c2a6d81909e9b3&oe=61684EDC&_nc_sid=7bff83',
  },
  {
    name: 'hhh',
    uri: 'https://instagram.fsjk1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/97170162_575921693350366_6329294829381484544_n.jpg?_nc_ht=instagram.fsjk1-1.fna.fbcdn.net&_nc_ohc=0zH7974ibAUAX_EfD_W&edm=ABfd0MgBAAAA&ccb=7-4&oh=d8bba42db9ee453fb6c2a6d81909e9b3&oe=61684EDC&_nc_sid=7bff83',
  },
];

const Home = () => {
  return (
    <Container>
      <Header />

      <StoryList items={array} />
    </Container>
  );
};

export default Home;

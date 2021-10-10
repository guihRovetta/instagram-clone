import React from 'react';

import Header from '../../components/Header';
import PostList from '../../components/PostList';
import StoryList from '../../components/StoryList';
import { Container } from './styles';

const array = [
  {
    name: 'testedfklfdkl',
    uri: 'https://instagram.fsjk1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/97170162_575921693350366_6329294829381484544_n.jpg?_nc_ht=instagram.fsjk1-1.fna.fbcdn.net&_nc_ohc=0zH7974ibAUAX_EfD_W&edm=ABfd0MgBAAAA&ccb=7-4&oh=d8bba42db9ee453fb6c2a6d81909e9b3&oe=61684EDC&_nc_sid=7bff83',
    hasStory: true,
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
    hasStory: true,
  },
  {
    name: 'ddd',
    uri: 'https://instagram.fsjk1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/97170162_575921693350366_6329294829381484544_n.jpg?_nc_ht=instagram.fsjk1-1.fna.fbcdn.net&_nc_ohc=0zH7974ibAUAX_EfD_W&edm=ABfd0MgBAAAA&ccb=7-4&oh=d8bba42db9ee453fb6c2a6d81909e9b3&oe=61684EDC&_nc_sid=7bff83',
    hasStory: true,
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

const data = {
  id: 'teste',
  user: {
    name: 'gildovigor',
    location: 'São Paulo, SP',
    image: {
      uri: 'https://pbs.twimg.com/profile_images/1436778542705033219/vJA6hDfg_400x400.jpg',
    },
    hasStory: true,
  },
  post: {
    image: {
      uri: 'https://uploads.metropoles.com/wp-content/uploads/2021/08/18094725/gil-do-vigor-8-1024x683.jpg',
    },
    likesAmount: 760,
    description: 'descrição do Vigor',
    commentsAmount: 26,
    createdAt: 'há 9 horas',
  },
};

const data2 = {
  id: 'teste2',
  user: {
    name: 'gildovigor',
    location: 'São Paulo, SP',
    image: {
      uri: 'https://pbs.twimg.com/profile_images/1436778542705033219/vJA6hDfg_400x400.jpg',
    },
    hasStory: true,
  },
  post: {
    image: {
      uri: 'https://uploads.metropoles.com/wp-content/uploads/2021/08/18094725/gil-do-vigor-8-1024x683.jpg',
    },
    likesAmount: 760,
    description: 'descrição do Vigor',
    commentsAmount: 26,
    createdAt: 'há 9 horas',
  },
};

const Home = () => {
  return (
    <Container>
      <Header />

      <PostList items={[data, data2]}>
        <StoryList items={array} />
      </PostList>
    </Container>
  );
};

export default Home;

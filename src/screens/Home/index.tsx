import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Header from '../../components/Header';
import PostList from '../../components/PostList';
import StoryList from '../../components/StoryList';
import { usePosts } from '../../services/hooks/posts/usePosts';
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

const Home = () => {
  const { data = [], isLoading, isError } = usePosts();

  console.log('------');
  console.log(data);

  return (
    <Container>
      <StatusBar style="auto" />
      <Header />

      {data?.length > 0 && (
        <PostList items={data}>
          <StoryList items={array} />
        </PostList>
      )}
    </Container>
  );
};

export default Home;

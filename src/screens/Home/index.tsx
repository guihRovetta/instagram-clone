import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Header from '../../components/Header';
import PostList from '../../components/PostList';
import StoryList from '../../components/StoryList';
import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <StatusBar style="auto" />
      <Header />

      <PostList>
        <StoryList />
      </PostList>
    </Container>
  );
};

export default Home;

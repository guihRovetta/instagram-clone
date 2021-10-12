import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Header from '../../components/Header';
import PostList from '../../components/PostList';
import StoryList from '../../components/StoryList';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Container } from './styles';

const Home = () => {
  const { themeMode } = useDarkMode();

  return (
    <Container>
      <StatusBar style={themeMode === 'light' ? 'dark' : 'light'} />
      <Header />

      <PostList>
        <StoryList />
      </PostList>
    </Container>
  );
};

export default Home;

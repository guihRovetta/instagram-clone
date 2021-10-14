import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useTheme } from 'styled-components';

import Home from '../screens/Home';
import NotFound from '../screens/NotFound';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRouters = () => {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: { width: 18, height: 18 },
        tabBarActiveTintColor: theme.colors.text500,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopWidth: 0,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'home-variant' : 'home-variant-outline'}
              size={28}
              color={theme.colors.text500}
            />
          ),
        }}
      />

      <Screen
        name="Search"
        component={NotFound}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'search' : 'search-outline'}
              size={28}
              color={theme.colors.text500}
            />
          ),
        }}
      />

      <Screen
        name="Fleets"
        component={NotFound}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'movie' : 'movie-outline'}
              size={28}
              color={theme.colors.text500}
            />
          ),
        }}
      />

      <Screen
        name="Shopping"
        component={NotFound}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'shopping' : 'shopping-outline'}
              size={28}
              color={theme.colors.text500}
            />
          ),
        }}
      />

      <Screen
        name="Profile"
        component={NotFound}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'person-circle' : 'person-circle-outline'}
              size={28}
              color={theme.colors.text500}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default AppRouters;

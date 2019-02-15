import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ListTeams from './components/ListTeams';
import ListPlayers from './components/ListPlayers';
import PlayerDetails from './components/PlayerDetails';



var AppNavigator = createStackNavigator(
  {
    ListTeams: ListTeams,
    ListPlayers: ListPlayers,
    PlayerDetails: PlayerDetails
  },
  {
    initialRouteName: "ListTeams"
  }
)

export default createAppContainer(AppNavigator);
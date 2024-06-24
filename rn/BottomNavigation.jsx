import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/home';
import Search from './screens/search';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator  screenOptions={{ headerShown: false, tabBarIconStyle: { opacity: 0.8 }, tabBarStyle: { backgroundColor: "#020202", height: 60, paddingTop: 10 }, tabBarLabelStyle: { color: '#ffffff' }, tabBarLabelPosition: 'below-icon' }}>
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: () => <Feather name='home' size={24} color={'#ffffff'} /> }} />
      <Tab.Screen name="Search" component={Search} options={{ tabBarIcon: () => <Feather name='search' size={24} color={'#ffffff'} /> }} />
      <Tab.Screen name="Notifications" component={Search} options={{ tabBarIcon: () => <Feather name='bell' size={24} color={'#ffffff'} /> }} />
      <Tab.Screen name="Mic" component={Search} options={{ tabBarIcon: () => <Feather name='mic' size={24} color={'#ffffff'} /> }} />
      <Tab.Screen name="Messages" component={Search} options={{ tabBarIcon: () => <Ionicons name='chatbubble-ellipses-outline' size={24} color={'#ffffff'} /> }} />
      <Tab.Screen name="Wallet" component={Search} options={{ tabBarIcon: () => <AntDesign name='wallet' size={24} color={'#ffffff'} /> }} />
    </Tab.Navigator>
  )
}

export default BottomNavigation;
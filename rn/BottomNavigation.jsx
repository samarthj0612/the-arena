import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/home';
import Search from './screens/search';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Dot from './components/Dot';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false, tabBarIconStyle: { opacity: 0.8 }, tabBarStyle: { backgroundColor: "#020202", height: 60, paddingTop: 10 }, tabBarLabelStyle: { color: '#ffffff' }, tabBarLabelPosition: 'below-icon' }}>
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ focused }) => getTabBarIcon('home', focused) }} />
      <Tab.Screen name="Search" component={Search} options={{ tabBarIcon: ({ focused }) => getTabBarIcon('search', focused) }} />
      <Tab.Screen name="Notifications" component={Search} options={{ tabBarIcon: ({ focused }) => getTabBarIcon('notifications', focused) }} />
      <Tab.Screen name="Mic" component={Search} options={{ tabBarIcon: ({ focused }) => getTabBarIcon('mic', focused) }} />
      <Tab.Screen name="Messages" component={Search} options={{ tabBarIcon: ({ focused }) => getTabBarIcon('messages', focused) }} />
      <Tab.Screen name="Wallet" component={Search} options={{ tabBarIcon: ({ focused }) => getTabBarIcon('wallet', focused) }} />
    </Tab.Navigator>
  )
}

const getTabBarIcon = (screen, focused) => {
  let tabIcon;

  switch (screen) {
    case 'home':
      tabIcon = <Feather name='home' size={24} color={'#ffffff'} />;
      break;
    case 'search':
      tabIcon = <Feather name='search' size={24} color={'#ffffff'} />
      break;
    case 'notifications':
      tabIcon = <Feather name='bell' size={24} color={'#ffffff'} />
      break;
    case 'mic':
      tabIcon = <Feather name='mic' size={24} color={'#ffffff'} />
      break;
    case 'messages':
      tabIcon = <Ionicons name='chatbubble-ellipses-outline' size={24} color={'#ffffff'} />;
      break;
    case 'wallet':
      tabIcon = <AntDesign name='wallet' size={24} color={'#ffffff'} />
      break;
  }
  return (
    <View style={{opacity: !focused ? 0.6 : 1, alignItems: 'center'}}>
      {tabIcon}
      {focused && <Dot />}
    </View>
  )
}

export default BottomNavigation;
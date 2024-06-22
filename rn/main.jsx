import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Home from './screens/home'
import BottomNavigation from './BottomNavigation'

const Main = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#020202'}}>
      <StatusBar backgroundColor={'#020202'} />
      <BottomNavigation />
    </View>
  )
}

export default Main
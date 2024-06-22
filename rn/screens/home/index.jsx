import { View, Text } from 'react-native'
import React from 'react'
import AddNewPost from '../addNewPost'

import EvilIcons from 'react-native-vector-icons/EvilIcons'

const Home = () => {
  return (
    <View>
      <Text>This is Home</Text>
      <EvilIcons name="search" size={50}/>
      <AddNewPost />
    </View>
  )
}

export default Home
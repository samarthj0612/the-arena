import { View, Text } from 'react-native'
import React from 'react'
import AddNewPost from '../addNewPost'

const Home = () => {
  return (
    <View>
      <Text>This is Home</Text>
      <AddNewPost />
    </View>
  )
}

export default Home
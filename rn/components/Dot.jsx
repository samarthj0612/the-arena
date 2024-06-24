import { View, StyleSheet, Text } from 'react-native'
import React from 'react'

const Dot = ({ color }) => {
  return (
    <View style={{ backgroundColor: color ? color : "#EB5409", ...styles.container }}>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    height: 4,
    width: 4,
    borderRadius: 50,
  }
})

export default Dot
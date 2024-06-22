import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Foundation from 'react-native-vector-icons/Foundation'

const PostFooter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <FontAwesome name='comments-o' size={22} color={'#878787'}/>
        <Text style={styles.text}>20</Text>
      </View>
      <View style={styles.section}>
        <AntDesign name='retweet' size={22} color={'#878787'}/>
        <Text style={styles.text}>20</Text>
      </View>
      <View style={styles.section}>
        <AntDesign name='hearto' size={22} color={'#878787'}/>
        <Text style={styles.text}>20</Text>
      </View>
      <View style={styles.section}>
        <Feather name='bookmark' size={22} color={'#878787'}/>
        <Text style={styles.text}>20</Text>
      </View>
      <View style={styles.dollar}>
        <Foundation name='dollar' size={22} color={'#878787'}/>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  section: {
    flexDirection: 'row',
    gap: 4
  },
  dollar: {
    height: 22,
    width: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#878787',
    flexDirection: 'row',
    gap: 4
  },

  text: {
    color: '#878787'
  },
})

export default PostFooter
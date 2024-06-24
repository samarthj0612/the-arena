import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { users } from '../assets/data'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import PostFooter from './PostFooter'
import { useNavigation } from '@react-navigation/native'
import { useBottomSheet } from './BottomSheetContext'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons.js';

const grey = '#808080';
const bottomSheetHeight = 130;

const Post = ({ name, username, text, media }) => {
  const {openBottomSheet} = useBottomSheet();
  const navigation = useNavigation();

  const sheetContent = (
    <View style={styles.sheetContentWrapper}>
      <TouchableOpacity style={styles.menuOption} onPress={() => navigation.navigate('Repost')}>
        <EvilIcons name="retweet" size={24} color={grey} />
        <Text style={styles.menuText}>Repost</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuOption}>
        <MaterialIcons name="text" size={24} color={grey} />
        <Text style={styles.menuText}>Quote</Text>
      </TouchableOpacity>
    </View>
  );

  const bottomSheet = () => {
    openBottomSheet(sheetContent, bottomSheetHeight);
  };

  return (
    <View style={ styles.container }>
      <Image style={styles.profilePic} source={{ uri: users[1].profile }} height={45} width={45} />

      <View style={ styles.content }>
        <View style={styles.postHeader}>
          <Text style={styles.text}>{ name }</Text>
          <Text style={styles.textSecondary}>@{ username }</Text>
          <Text style={styles.textSecondary}>1 day</Text>
          <TouchableOpacity style={styles.options} onPress={bottomSheet}>
            <SimpleLineIcons name='options' size={16} color={'#ffffff'} />
          </TouchableOpacity>
        </View>

        <Text style={styles.text}>{text}</Text>

        {media && media.type == 'image' && <Image style={styles.postMedia} source={{ uri: media.source }} height={320} width={320} />}

        <PostFooter />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 0.6,
    borderBottomColor: '#808080'
  },

  profilePic: {
    borderRadius: 50
  },

  content: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    gap: 6,
  },

  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1
  },

  options: {
    marginStart: 20
  },

  text: {
    color: '#ffffff'
  },

  textSecondary: {
    color: '#878787'
  },

  postMedia: {
    borderRadius: 6
  },

  sheetContentWrapper: {
    gap: 10,
  },
  menuOption: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    color: 'white',
  },
})

export default Post
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useBottomSheet} from '../components/BottomSheetContext.js';
import Button from '../components/Button.jsx';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons.js';
//Colors
const grey = '#808080';
const bottomSheetHeight = 130;

const CallBottomSheet = () => {
  const {openBottomSheet} = useBottomSheet();

  const sheetContent = (
    <View style={styles.sheetContentWrapper}>
      <TouchableOpacity style={styles.menuOption}>
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
    <View>
      <Button title={'Repost'} onPress={bottomSheet} />
    </View>
  );
};

export default CallBottomSheet;

const styles = StyleSheet.create({
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
});

import { View, Text, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, Switch, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import { users } from '../../assets/data'
import CustomTextInput from '../../components/CustomTextInput'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const userData = Object.values(users)

const AddNewPost = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.body}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset={20}
      >
        <View style={styles.container}>

          <View style={styles.header}>
            <Text style={styles.headerText}>New Post</Text>
          </View>

          <View style={styles.inputContainer}>
            <Image style={styles.profileImg} source={{ uri: userData[1].profile }} />
            <CustomTextInput
              placeholder='What Happening?'
              placeholderStyle={styles.placeholderStyle}
              style={styles.textInput}
            />
          </View>

          <View style={styles.submit}>
            <View style={styles.medias}>
              <View style={styles.mediaIcons}>
                <TouchableOpacity>
                  <Octicons name="image" color="white" size={30} />
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={styles.gifIcon}>
                    <MaterialIcons name="gif" color="white" size={30} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <MaterialCommunityIcons name="format-list-checkbox" color="white" size={30} />
                </TouchableOpacity>
              </View>

              <View style={styles.switchContainer}>
                <Text style={styles.switchText}>Make Post Private</Text>
                <Switch
                  trackColor={{ false: '#767577', true: '#EB540A' }}
                  thumbColor={isEnabled ? '#ffffff' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>

            <TouchableOpacity style={styles.postButtonContainer}>
              <View style={styles.postButton}>
                <Text style={styles.postNowText}>Post Now</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#020202",
  },
  container: {
    flex: 1,
  },
  header: {
    borderBottomWidth: 2,
    borderBottomColor: "#3B3B3B",
    height: 60,
    justifyContent: "center",
    marginBottom: 25,
  },
  headerText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 20,
    padding: 12
  },
  profileImg: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    color: 'white',
  },
  placeholderStyle: {
    color: '#808080',
    fontSize: 20,
  },
  submit: {
    alignItems: 'center',
    padding: 12
  },
  medias: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  mediaIcons: {
    flexDirection: "row",
    gap: 20,
  },
  gifIcon: {
    height: 30,
    width: 30,
    borderColor: "white",
    borderWidth: 2,
    justifyContent: "center",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  switchText: {
    color: "white",
  },
  postButtonContainer: {
    width: '100%',
  },
  postButton: {
    backgroundColor: "#EB540A",
    height: 44,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  postNowText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
})

export default AddNewPost

import { View, Text, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, Switch, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { users } from '../../assets/data'
import CustomTextInput from '../../components/CustomTextInput'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const userData = Object.values(users)


const Repost = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={80}
      style={styles.container}>

    <SafeAreaView style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Repost</Text>
      </View>

      <View style={styles.input}>

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
              <View>
                <Octicons name="image" color="white" size={30} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={{height:30, width:30, borderColor:"white", borderWidth:2, justifyContent:"center"}}>
                <MaterialIcons name="gif" color="white" size={30} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View>
                <MaterialCommunityIcons name="format-list-checkbox" color="white" size={30} />
              </View>
            </TouchableOpacity>

          </View>

          <View style={styles.switch}>
            <Text style={{color:"white"}}>Make Post Private</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#EB540A' }}
              // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <TouchableOpacity style={{width: '100%'}}>
          <View style={styles.postButton}>
            <Text style={styles.postNowText}>Post Now</Text>
          </View>
        </TouchableOpacity>


      </View>
    </SafeAreaView>

    </KeyboardAvoidingView>

  )
}


const styles = StyleSheet.create({
  body: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#020202"
  },

  container:{
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#020202"
  },


  submit:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 20
  },

  headerText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
  },
  header: {
    borderBottomWidth: 2,
    borderBottomColor: "#3B3B3B",
    height: "8%",
    justifyContent: "center",
    marginBottom: 25

  },

switch:{
  flexDirection:"row",
  alignItems:"center",
  gap:8
},

  input: {
    flexDirection: "row",
    marginLeft: 20,
    gap: 10,
    // backgroundColor:"blue",
    height: "70%",

  },


  profileImg: {
    height: 60,
    width: 60,
    borderRadius: 50
  },

  textInput: {
    height: 40,
    paddingHorizontal: 10,
    width: '80%',
    color: 'white', // Add color to text input to distinguish from placeholder
  },
  placeholderStyle: {
    color: '#808080',
    fontSize: 20, // Increase the placeholder font size
  },

  postButton: {
    backgroundColor: "#EB540A",
    height: 44,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"

  },

  postNowText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white"
  },

  mediaIcons: {
    flexDirection: "row",
    gap: 20
  },
  medias: {
    marginBottom: 20,
    flexDirection:"row",
    justifyContent:"space-between",
    width:"100%",
    // flexShrink: 0,
    
  }
})

export default Repost
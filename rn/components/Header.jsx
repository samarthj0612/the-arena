import { View, Image } from 'react-native'
import React from 'react'
import Logo from '../assets/images/justlogo.png';

const Header = () => {
  return (
    <View style={{ height: 75, justifyContent: "center", alignItems: "center", backgroundColor: "#020202" }}>
      <Image source={Logo} style={{ height: 40, width: 40 }} />
    </View>
  )
}

export default Header
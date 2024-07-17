import { Text, SafeAreaView, StyleSheet, TouchableOpacity,View, ScrollView ,Image, ImageBackground} from 'react-native';

import {useState, useEffect} from 'react'




export default function AnimationScreen(props) {
useEffect(()=>{
  setTimeout(()=>{
  props.navigation.navigate('Home')
  },3200)
},[])
return(
<View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#F9F9F2'}}>
 <Image
              style={{
              width:400, height:400  
              }}
          source={{
            uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/b49cbd6259597572ab74a0d31a86e756',
          }}
        />
</View>
)
















  
}
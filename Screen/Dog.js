import { Text, SafeAreaView, StyleSheet, TouchableOpacity,View, Image, ImageBackground,ScrollView} from 'react-native';

import {useState, useEffect} from 'react'


export default function Bored(props) {
  const [data, setData] = useState([])
  const [ change, setChange] = useState(false)

 
function cool(){
  setChange(!change)
}
function APICall(){

fetch('https://dog.ceo/api/breeds/image/random')
.then((response)=>response.json())
.then((json)=>setData(json))
.catch((error)=>console.log(error))

}
useEffect(()=>{
APICall()
},[change])




  return (
 <View style={{flex:1,backgroundColor:"white"}}>
    <View style={{flex:1,}}>
    <Text style={{fontSize: 35,
    fontWeight: 'bold',
    marginTop:80,
    color: 'black',alignSelf:"center"}}>Cute Dogs</Text>
    </View>
    

    <View style={{flex:2,}}>
   <Image style={styles.gif} source={{uri:data.message}}/>
    </View>
   <View style={{flex:1,}}>
  <TouchableOpacity onPress={cool} style={styles.button}>
  <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>MORE</Text>
  </TouchableOpacity>
    <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('Home');
          }}>
          <Text style={{fontWeight:'bold', fontSize:20}}>Back</Text>
        </TouchableOpacity>
  </View>
 </View>

        
     
      
        
      
    
  );
}
const styles = StyleSheet.create({

  gif: {
    width: 300,
    height: 300,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20, 
    marginTop:10
  },
  button: {
    backgroundColor: '#6495ed',
    color: '#3A59FF',
    width: '75%',
    height: 30,
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    
    alignSelf:"center",
    fontSize: 15,
    marginTop: '10%',
    alignItems: 'center',
  },
});

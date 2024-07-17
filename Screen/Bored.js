import { Text, SafeAreaView, StyleSheet, TouchableOpacity,View,ScrollView,Image } from 'react-native';

import {useState, useEffect} from 'react'


export default function Bored(props) {
  const [data, setData] = useState([])
  const [ change, setChange] = useState(false)

 
function cool(){
  setChange(!change)
}
function APICall(){

fetch('https://bored-api.appbrewery.com/random')
.then((response)=>response.json())
.then((json)=>{setData(json)
                console.log(json)
})
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
    marginTop:60,
    color: 'black',alignSelf:"center"}}>Bored</Text>
    </View>

    <View style={styles.container }>
   <Image style={{ width: 250,
                height: 300,
                borderRadius: 10
              }} source={{uri:"https://media1.tenor.com/m/4obKevQMqugAAAAd/im-bored.gif"}}/>
  <Text style={{fontSize:25, fontWeight:'bold'}}>DIFFICULTY: {data.accessibility} |  People needed: {data.participants} | Cost Level:  {data.price} | Link(if needed):  {data.link} | Type: {data.type}</Text>

  <Text style={{fontSize:25}}>{data.content} <Text style={{fontSize:20, fontWeight:'bold'}}>Cure: {data.activity}. </Text></Text>
  </View>

<View style={{flex:1}}>
        <TouchableOpacity onPress={setChange} style={styles.button}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
            Nah new one
          </Text>
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
  container: {
flex:5,
    alignItems: 'center',
    paddingTop: 10,
     margin:20,
     overflow: 'hidden',
     height:'95%',
     width:"85%",
     padding:10,
     borderRadius:50,
     backgroundColor:"#17cf48",
     marginLeft:30
  },
 
 
  gif: {
    width: 200,
    height: 160,
    borderRadius: 150,
    alignSelf: 'center',
    marginBottom: 20, 
    marginTop:10
  },

  content: {
    marginRight: 20,
    fontSize: 15,
    marginBottom: 10, // Add some margin below the content
    marginLeft: 20,
    alignSelf: 'center',
  },
  textcontent: {
    fontSize: 15,
    color: '#3B3A3B',
    marginRight: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
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
    marginTop:'4%',
    alignItems: 'center',
  },
});





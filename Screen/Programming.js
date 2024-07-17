import React, { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';

export default function App(props) {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(false);
  

  function cool(){
  setChange(!change)
}

function APICall(){


fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
.then((response)=>response.json())
.then((json)=>setData(json))
.catch((error)=>console.log(error))

 

}
 

  useEffect(() => {
    APICall();
  }, [change]);

  return (
    <View style={{flex:1,backgroundColor:"white"}}>
    <View style={{flex:1,}}>
    <Text style={{fontSize: 25,
    fontWeight: 'bold',
    marginTop:80,
    color: 'black',alignSelf:"center"}}>Jokes of the Day</Text>
    </View>
    <View style={styles.container }>
      
        
          
          <Image
            style={styles.gif}
            source={{
              uri: 'https://media1.tenor.com/m/WkgpyPpxpDUAAAAC/work-internet.gif',
            }}
          />
          
            <Text style={styles.content}>{data.content}</Text>
            <Text style={styles.textcontent}>{data.joke}</Text>
          </View>
        <View style={{flex:1}}>
        <TouchableOpacity onPress={setChange} style={styles.button}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
            Next Joke
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
    flex: 3,
    alignItems: 'center',
    paddingTop: 10,
     margin:20,
     marginTop:20,
     overflow: 'hidden',
     height:550,
     width:"85%",
     padding:10,
     borderRadius:50,
     backgroundColor:"#EFC6EF",
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
    marginTop: '10%',
    alignItems: 'center',
  },
});

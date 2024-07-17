import { Text, SafeAreaView, StyleSheet, TouchableOpacity,View, ScrollView ,Image } from 'react-native';

import {useState, useEffect} from 'react'


export default function App(props) {
  const [data, setData] = useState([])
  const [ change, setChange] = useState(false)

 
function cool(){
  setChange(!change)
}
function APICall(){

fetch('https://baconipsum.com/api/?type=meat-and-filler')
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
    <Text style={{fontSize: 25,
    fontWeight: 'bold',
    marginTop:80,
    color: 'black',alignSelf:"center"}}>Counterfeit Words (Figure out the true meaning of the "words")</Text>
    </View>
    <View style={styles.container }>

   <Image style={styles.gif} source={{uri:"https://media1.giphy.com/media/WoWm8YzFQJg5i/giphy.gif?cid=6c09b95260oupqq4e5xo2si5sr2le7tbcxwj0ykdy8b47e88&ep=v1_gifs_search&rid=giphy.gif&ct=g"}}/>

   <Text style={{fontSize:10}}> {data}</Text>

   </View>
    <View style={{flex:1,}}>

  <TouchableOpacity onPress={cool} style={styles.button}>
  <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>Next</Text>
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
    flex: 5,
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
    marginTop: '4%',
    alignItems: 'center',
  },
});
